// src/app/resume/page.tsx
"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion';
import ClientWrapper from "../clientwrapper";

import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Activities from "./components/activities";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Publications from "./components/publications";

const tabClassNameDesktop = "relative px-4 py-3 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg w-[97%] h-[120%] \
                      text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:shadow-sm hover:scale-105 \
                      data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-200 dark:data-[state=active]:from-zinc-700 dark:data-[state=active]:to-zinc-600 \
                      data-[state=active]:shadow-md \
                      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-100 before:to-purple-200 dark:before:from-zinc-700 dark:before:to-zinc-600 \
                      before:opacity-0 before:transition-opacity before:duration-300 \
                      hover:before:opacity-10 data-[state=active]:before:opacity-100 \
"

const tabClassNameMobile = "relative px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out rounded-lg w-full h-auto text-center leading-tight whitespace-normal \
                      text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:shadow-sm hover:scale-105 \
                      data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-200 dark:data-[state=active]:from-zinc-700 dark:data-[state=active]:to-zinc-600 \
                      data-[state=active]:shadow-md \
                      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-100 before:to-purple-200 dark:before:from-zinc-700 dark:before:to-zinc-600 \
                      before:opacity-0 before:transition-opacity before:duration-300 \
                      hover:before:opacity-10 data-[state=active]:before:opacity-100 \
"

export default function Resume() {
    const [activeTab, setActiveTab] = useState('education');
    const transitionSettings = { duration: 0.3, ease: 'easeInOut' as const };

    return (
        <ClientWrapper>
            <div className="min-h-screen text-black dark:text-gray-100 flex flex-col">
                {/* Detailed Resume */}
                <div className="flex justify-center pt-10 mb-5">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-11/12 sm:w-4/5">
                        {/* Desktop Layout */}
                        <TabsList className="grid grid-cols-7 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 h-full hidden lg:grid">
                            <TabsTrigger
                                value="education"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Education</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="experience"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Experience</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="projects"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Projects</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="activities"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Activities</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="publications"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Publications</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="awards"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Honors & Awards</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="skills"
                                className={tabClassNameDesktop}
                            >
                                <span className="relative z-10">Skills</span>
                            </TabsTrigger>
                        </TabsList>
                        {/* Mobile Layout */}
                        <TabsList className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 h-full">
                            <TabsTrigger
                                value="education"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Education</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="experience"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Experience</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="projects"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Projects</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="activities"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Activities</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="publications"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Publications</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="awards"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Honors & Awards</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="skills"
                                className={tabClassNameMobile}
                            >
                                <span className="relative z-10">Skills</span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex justify-center pt-4">
                    <div className="w-11/12 sm:w-4/5">
                        <AnimatePresence mode="wait" initial={false}>
                            {activeTab === 'education' && (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Education />
                                </motion.div>
                            )}
                            {activeTab === 'experience' && (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Experience />
                                </motion.div>
                            )}
                            {activeTab === 'projects' && (
                                <motion.div
                                    key="projects"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Projects />
                                </motion.div>
                            )}
                            {activeTab === 'activities' && (
                                <motion.div
                                    key="activities"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Activities />
                                </motion.div>
                            )}
                            {activeTab === 'publications' && (
                                <motion.div
                                    key="publications"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Publications />
                                </motion.div>
                            )}
                            {activeTab === 'awards' && (
                                <motion.div
                                    key="awards"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Awards />
                                </motion.div>
                            )}
                            {activeTab === 'skills' && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transitionSettings}
                                >
                                    <Skills />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </ClientWrapper>
    );
}
