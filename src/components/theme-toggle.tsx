"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";
const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "dark" || saved === "light") {
            setTheme(saved);
            applyTheme(saved);
            return;
        }

        // No saved preference: follow the system theme, live.
        const media = window.matchMedia(DARK_MEDIA_QUERY);
        const followSystem = (matchesDark: boolean) => {
            const next: Theme = matchesDark ? "dark" : "light";
            setTheme(next);
            applyTheme(next);
        };
        followSystem(media.matches);

        const onChange = (event: MediaQueryListEvent) => followSystem(event.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    const toggleTheme = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
    };

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-secondary"
        >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
            <span>{isDark ? "Light" : "Dark"}</span>
        </button>
    );
}
