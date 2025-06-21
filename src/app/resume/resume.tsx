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

const tabClassName = "relative px-4 py-3 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg w-[97%] h-[120%] \
                      text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm hover:scale-105 \
                      data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-purple-200 \
                      data-[state=active]:shadow-md \
                      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-100 before:to-purple-200 \
                      before:opacity-0 before:transition-opacity before:duration-300 \
                      hover:before:opacity-10 data-[state=active]:before:opacity-100 \
"

export default function Resume() {
    const [activeTab, setActiveTab] = useState('education');
    const transitionSettings = { duration: 0.3, ease: 'easeInOut' };

    return (
        <ClientWrapper>
            <div className="min-h-screen text-black flex flex-col">
                {/* Detailed Resume */}
                <div className="flex justify-center pt-10 mb-5">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-4/5">
                        <TabsList className="grid grid-cols-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100, h-full">
                            <TabsTrigger
                                value="education"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Education</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="experience"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Experience</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="projects"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Projects</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="activities"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Activities</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="awards"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Honors & Awards</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="skills"
                                className={tabClassName}
                            >
                                <span className="relative z-10">Skills</span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex justify-center pt-4">
                    <div className="w-4/5">
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