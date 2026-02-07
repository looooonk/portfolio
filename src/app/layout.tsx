// src/app/layout.tsx
import '../styles/globals.css'

export const metadata = {
    title: 'Taehoon Hwang',
    description: 'Portfolio of Taehoon Hwang',
}

const theme_script = `
(() => {
  const theme_key = 'theme';
  const saved_theme = localStorage.getItem(theme_key);
  const has_saved_theme = saved_theme === 'dark' || saved_theme === 'light';
  const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = has_saved_theme ? saved_theme : (prefers_dark ? 'dark' : 'light');
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: theme_script }} />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
