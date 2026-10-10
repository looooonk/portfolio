# Portfolio
My portfolio, hosted on [Vercel](https://vercel.com/taehoon-hwang/portfolio) at [www.taehoonhwang.net](https://www.taehoonhwang.net/).

Built with Next.js, TypeScript, and Tailwind CSS.

## Development

Use Node.js 24 and install dependencies with `npm ci`.

- `npm run dev`: start the development server.
- `npm run lint`: run ESLint.
- `npm run build`: build the site with Next.js.
- `npm start`: serve the production build locally.

## Deployment

Vercel builds and deploys the connected `looooonk/portfolio` repository. Pushes to `main` deploy to production; other branches and pull requests get preview deployments. GitHub Actions runs lint and build checks.

The Vercel project uses the Next.js preset with default build and output settings. Next.js prerenders the portfolio and Vercel provides image optimization. No environment variables are required.

DNS is managed in Squarespace Domains. Both `www.taehoonhwang.net` and `taehoonhwang.net` belong to the Vercel project, with the apex domain redirecting to `www`. Use the DNS records shown in Vercel's project domain settings when changing providers.
