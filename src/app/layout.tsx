// src/app/layout.tsx
import '../styles/globals.css'

export const metadata = {
    title: 'Taehoon Hwang',
    description: 'Portfolio of Taehoon Hwang',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}