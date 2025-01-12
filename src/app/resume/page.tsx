// src/app/resume/page.tsx
"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion';
import ClientWrapper from "./../clientwrapper";

import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Activities from "./components/activities";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Return from "./components/return";

export default function Resume() {
  const [activeTab, setActiveTab] = useState('education');
  const transitionSettings = { duration: 0.4 };

  return (
    <ClientWrapper>
      <div className="min-h-screen pt-8 bg-gray-100 text-black flex flex-col">
        <h1 className="text-3xl font-bold text-center">Taehoon Hwang</h1>

        {/* Detailed Resume */}
        <div className="flex justify-center pt-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-4/5">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="awards">Honors & Awards</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
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
                  <Return />
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
                  <Return />
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
                  <Return />
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
                  <Return />
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
                  <Return />
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
                  <Return />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}