"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const theme_key = "theme";
const media_query = "(prefers-color-scheme: dark)";

function get_system_theme(): Theme {
    return window.matchMedia(media_query).matches ? "dark" : "light";
}

function apply_theme(theme: Theme) {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, set_theme] = useState<Theme>("light");

    useEffect(() => {
        const saved_theme = localStorage.getItem(theme_key);
        if (saved_theme === "dark" || saved_theme === "light") {
            set_theme(saved_theme);
            apply_theme(saved_theme);
            return;
        }

        const media = window.matchMedia(media_query);
        const system_theme = get_system_theme();
        set_theme(system_theme);
        apply_theme(system_theme);

        const on_change = (event: MediaQueryListEvent) => {
            const next_theme: Theme = event.matches ? "dark" : "light";
            set_theme(next_theme);
            apply_theme(next_theme);
        };

        media.addEventListener("change", on_change);
        return () => media.removeEventListener("change", on_change);
    }, []);

    const toggle_theme = () => {
        const next_theme: Theme = theme === "dark" ? "light" : "dark";
        set_theme(next_theme);
        apply_theme(next_theme);
        localStorage.setItem(theme_key, next_theme);
    };

    const is_dark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggle_theme}
            aria-label={is_dark ? "Switch to light mode" : "Switch to dark mode"}
            title={is_dark ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-secondary"
        >
            {is_dark ? <Sun size={14} /> : <Moon size={14} />}
            <span>{is_dark ? "Light" : "Dark"}</span>
        </button>
    );
}
