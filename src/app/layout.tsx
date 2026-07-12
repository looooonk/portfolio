import type { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
    title: 'Taehoon Hwang',
    description: 'Portfolio of Taehoon Hwang',
}

// Runs before hydration so the correct theme paints on first load.
const themeScript = `
(() => {
  const saved = localStorage.getItem('theme');
  const hasSaved = saved === 'dark' || saved === 'light';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = hasSaved ? saved : (prefersDark ? 'dark' : 'light');
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
