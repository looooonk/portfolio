'use client';

import { useEffect, useState } from 'react';

type Commit = {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  repository: string; // Add repository name to commits
};

export default function CommitHistory() {
  const [allCommits, setAllCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('/api/github-history');
        if (!response.ok) {
          throw new Error('Failed to fetch commit history');
        }
        const data: Commit[] = await response.json();
        setAllCommits(data); // Store all commits for grid and list
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCommits();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!allCommits.length) return <p>Loading...</p>;

  // Process data for the grid
  const today = new Date();
  const past30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - (30 - i - 1));
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  });

  const commitCounts: Record<string, number> = {};
  allCommits.forEach((commit) => {
    const date = commit.commit.author.date.split('T')[0];
    commitCounts[date] = (commitCounts[date] || 0) + 1;
  });

  const gridData = past30Days.map((date) => ({
    date,
    count: commitCounts[date] || 0,
  }));

  // Color shades based on commit count
  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-300';
    if (count <= 2) return 'bg-green-200';
    if (count <= 5) return 'bg-green-400';
    return 'bg-green-600';
  };

  // Limit the list to the 5 most recent commits
  const recentCommits = allCommits.slice(0, 5);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Grid Visualization */}
      <div className="grid grid-cols-10 grid-rows-3 gap-2">
        {gridData.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-md ${getColor(day.count)}`}
            title={`${day.date}: ${day.count} commits`}
          ></div>
        ))}
      </div>

      {/* Recent Commit Log */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Commits</h2>
        <ul className="space-y-4">
          {recentCommits.map((commit) => (
            <li key={commit.sha}>
              <p className="text-black font-semibold">{commit.commit.message}</p>
              <p className="text-gray-600 text-sm">{commit.repository}</p>
              <p className="text-gray-500 text-xs">
                {new Date(commit.commit.author.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
