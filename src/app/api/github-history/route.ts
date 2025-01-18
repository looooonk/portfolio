import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const GITHUB_API_BASE = 'https://api.github.com';

type Commit = {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
};

async function fetchCommits(owner: string, repo: string, token: string): Promise<Commit[]> {
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/commits`;
  const headers = { Authorization: `Bearer ${token}` };
  const commits: Commit[] = [];

  let nextUrl: string | null = url;
  while (nextUrl) {
    const response: Response = await fetch(nextUrl, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch commits for ${repo}: ${response.statusText}`);
    }

    const data: Commit[] = await response.json();
    commits.push(...data);

    // Handle pagination
    const linkHeader: string | null = response.headers.get('link');
    nextUrl = linkHeader?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;
  }

  return commits;
}

export async function GET() {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  const owner = 'AWC2124R';
  const repos = ['Portfolio', 'Benfords-Law-Paper'];

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token is missing in the server configuration' },
      { status: 500 }
    );
  }

  try {
    const allCommits = [];
    for (const repo of repos) {
      const commits = await fetchCommits(owner, repo, token);
      allCommits.push(...commits);
    }

    return NextResponse.json(allCommits.slice(0, 50), { status: 200 }); // Limit to 10 most recent commits
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
