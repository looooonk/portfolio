// src/app/page.tsx
'use client';

import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaOrcid } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import Resume from './resume/resume';
import ThemeToggle from '@/components/theme-toggle';
import IconLink from "@/components/icon-link";

function Sidebar() {
    return (
        <div className="flex flex-col items-center lg:items-stretch space-y-5">
            <div className="lg:self-center">
                <Image
                    src="/me.jpg"
                    alt="Me!"
                    width={220}
                    height={220}
                    className="object-cover w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-sm grayscale-[20%]"
                />
            </div>

            <div className="space-y-3 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground lg:text-center">Taehoon Hwang</h1>
                <div className="h-px w-full bg-border"></div>
            </div>

            <div className="text-sm sm:text-base text-foreground space-y-1.5 text-center lg:text-left">
                <p>
                    <span>Computer Science Undergraduate</span>
                    <br />
                    <span className="text-muted-foreground">@ </span>
                    <span className="font-semibold text-muted-foreground">Columbia University</span>
                </p>
                <p>
                    <span>Research Assistant</span>
                    <br />
                    <span className="text-muted-foreground">@ </span>
                    <span className="font-semibold text-muted-foreground">Columbia NLP Lab</span>
                </p>
            </div>

            <p className="text-sm text-muted-foreground font-mono break-words text-center lg:text-left">
                taehoon.h [at] columbia [dot] edu
            </p>

            <p className="text-sm text-muted-foreground text-center lg:text-left leading-relaxed">
                I am an undergraduate student studying computer science at{' '}
                <a
                    href="https://www.columbia.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline visited:text-blue-400"
                >
                    Columbia University
                </a>
                . My research focuses on natural language processing, particularly with large language models and reinforcement learning. I am directly advised by PhD candidate{' '}
                <a
                    href="https://www.yunfanzhang.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline visited:text-blue-400"
                >
                    Yunfan Zhang
                </a>
                {' '}at{' '}
                <a
                    href="https://www.cs.columbia.edu/nlp/index.cgi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline visited:text-blue-400"
                >
                    Columbia&apos;s NLP Lab
                </a>
                {' '}under{' '}
                <a
                    href="https://www.cs.columbia.edu/~kathy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline visited:text-blue-400"
                >
                    Prof. Kathleen McKeown
                </a>
                &apos;s guidance.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
                <IconLink
                    href="https://www.linkedin.com/in/taehoon-hwang/"
                    label="LinkedIn profile"
                >
                    <FaLinkedin size={24} />
                </IconLink>
                <IconLink
                    href="https://github.com/looooonk"
                    label="GitHub profile"
                >
                    <FaGithub size={24} />
                </IconLink>
                <IconLink
                    href="https://orcid.org/0009-0005-6452-9258"
                    label="ORCID profile"
                >
                    <FaOrcid size={24} />
                </IconLink>
                <IconLink
                    href="/CV.pdf"
                    label="Curriculum vitae"
                >
                    <IoDocumentText size={24} />
                </IconLink>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <ThemeToggle />

            {/* Mobile: stacked layout */}
            <div className="lg:hidden">
                <div className="px-6 pt-10 pb-4 flex flex-col items-center">
                    <Sidebar />
                </div>
                <Resume />
            </div>

            {/* Desktop: two-column layout with sticky sidebar */}
            <div className="hidden lg:flex min-h-screen">
                <aside className="w-80 xl:w-96 flex-shrink-0 border-r border-border">
                    <div className="sticky top-0 h-screen overflow-y-auto flex items-start justify-center px-10 py-10">
                        <Sidebar />
                    </div>
                </aside>

                <main className="flex-1 min-w-0 overflow-y-auto">
                    <Resume />
                </main>
            </div>
        </div>
    );
}
