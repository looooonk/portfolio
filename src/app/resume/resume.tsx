// src/app/resume/resume.tsx
"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Activities from "./components/activities";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Publications from "./components/publications";

const tabs = [
    { key: "education", label: "Education" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "activities", label: "Activities" },
    { key: "publications", label: "Publications & Contributions" },
    { key: "awards", label: "Honors & Awards" },
    { key: "skills", label: "Skills" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const tabContent: Record<TabKey, ReactNode> = {
    education: <Education />,
    experience: <Experience />,
    projects: <Projects />,
    activities: <Activities />,
    publications: <Publications />,
    awards: <Awards />,
    skills: <Skills />,
};

export default function Resume() {
    const [activeTab, setActiveTab] = useState<TabKey>("education");

    return (
        <div className="text-foreground flex flex-col px-6 sm:px-10 lg:px-10 xl:px-14 pt-8 lg:pt-10">
            {/* Desktop tabs */}
            <nav className="hidden lg:flex border-b border-border flex-wrap">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-4 py-2.5 text-sm font-medium -mb-px border-b-2 transition-colors ${
                            activeTab === key
                                ? "border-foreground text-foreground"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            {/* Mobile tabs */}
            <nav className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-1 border border-border rounded-md p-1 bg-secondary">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-3 py-2 text-xs sm:text-sm font-medium rounded transition-colors ${
                            activeTab === key
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            <div className="pt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {tabContent[activeTab]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
