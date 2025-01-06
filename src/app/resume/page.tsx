// src/app/resume/page.tsx
"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { FaHouseChimney } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa'
import { BiWorld } from "react-icons/bi";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { motion, AnimatePresence } from 'framer-motion';
import ClientWrapper from "./../clientwrapper";

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
                  <div>
                    <div className="pt-4 space-y-8">
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Purdue University</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p>B.S. in Computer Science, Minor in Mathematics, Machine Intelligence Track</p>
                          <p className="text-right">Aug. 2023 ~ Present</p>
                        </div>
                        <div className="space-y-2 pt-2">
                          <p>
                            <span className="font-semibold">Overall GPA:</span> 4.00 / 4.00
                          </p>
                          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span className="font-semibold" style={{ whiteSpace: 'nowrap' }}>Relevant Courses:</span>
                            <div style={{ marginLeft: '10px', flex: 1, maxWidth: '60%',wordBreak: 'keep-all',overflowWrap: 'break-word' }}>
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Probability 
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    MA 41600
                                  </div>
                                  Took Spring 2024
                                </HoverCardContent>
                              </HoverCard>                 
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Linear Algebra
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    MA 26500
                                  </div>
                                  Took Fall 2023
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Quantum Machine Learning Research
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    PHYS 49000ZF
                                  </div>
                                  Took Spring 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Discrete Mathematics
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 18200
                                  </div>
                                  Took Spring 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Programming in C
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 24000
                                  </div>
                                  Took Spring 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Computer Architecture
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 25000
                                  </div>
                                  Took Fall 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Data Structures
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 25000
                                  </div>
                                  Took Fall 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Statistical Methods
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    STAT 51100
                                  </div>
                                  Took Fall 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Competitive Programming I
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 21100
                                  </div>
                                  Took Spring 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Competitive Programming II
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 31100
                                  </div>
                                  Took Fall 2024
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Foundations of Deep Learning
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 58700
                                  </div>
                                  Taking Spring 2025
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Data Mining & Machine Learning
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 37300
                                  </div>
                                  Taking Spring 2025
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                              <HoverCard openDelay={50} closeDelay={50}>
                                <HoverCardTrigger>
                                  Introduction to Artificial Intelligence
                                </HoverCardTrigger>
                                <HoverCardContent style={{ width: 'auto' }}>
                                  <div style={{ fontWeight: 'bold' }}>
                                    CS 47100
                                  </div>
                                  Taking Spring 2025
                                </HoverCardContent>
                              </HoverCard>
                              ,{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Seoul Science High School</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p>32nd Cohort, Granted early admission</p>
                          <p className="text-right">Mar. 2020 ~ Feb. 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
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
                  <div>
                    <div className="space-y-8 pt-4">
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">CS 18200 & CS 24000 Undergraduate TA</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Jan. 2025 ~ Present</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="italic">Purdue University</p>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>

                        {/* <ul className="list-disc pl-5">
                          <li>
                            Engineered demand forecasting pipeline integrating probability curves with LSTM encoding for enhanced accuracy
                          </li>
                          <li>
                            Optimized inference storage by achieving a reduction of &gt;99% compared to traditional deep learning models
                          </li>
                          <li>
                            Conducted latent space analysis and illustrated composite encoding of demand features using LSTM models
                          </li>
                        </ul> */}
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Research Assistant</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Jan. 2024 ~ Dec. 2024</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="italic">Purdue University</p>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>

                        <ul className="list-disc pl-5">
                          <li>
                            Engineered demand forecasting pipeline integrating probability curves with LSTM encoding for enhanced accuracy
                          </li>
                          <li>
                            Optimized inference storage by achieving a reduction of &gt;99% compared to traditional deep learning models
                          </li>
                          <li>
                            Conducted latent space analysis and illustrated composite encoding of demand features using LSTM models
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Machine Learning Engineer</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Sep. 2023 ~ Aug. 2024</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <p className="italic">Quantum Research Sciences</p>
                            <a
                              href="https://quantumresearchsciences.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-800"
                            >
                              <BiWorld className="text-left" size={15} />
                            </a>
                          </div>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>
                        
                        <ul className="list-disc pl-5">
                          <li>
                            Employed ML algorithms and statistical techniques to deploy software for the United States Air Force
                          </li>
                          <li>
                            Produced Monte Carlo simulations to test and tune quantum algorithms for inventory management
                          </li>
                          <li>
                            Developed end-user interface for data analytics in quantum inventory management software
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Student Researcher</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Mar. 2022 ~ Dec. 2022</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="italic">Seoul Science High School</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        
                        <ul className="list-disc pl-5">
                          <li>
                            Explored enhancements in real-time landmark tracking algorithms using machine and deep learning
                          </li>
                          <li>
                            Improved Google MediaPipe performance by reducing untracked frames by 91.7% through U-Net segmentation
                          </li>
                          <li>
                            Designed a versatile multi-headed software solution adaptable to various hardware specifications
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <div className="flex items-center space-x-2"> 
                            <h3 className="text-lg font-bold">Research Assistant</h3>
                            <a
                              href="https://github.com/AWC2124R/OSR-Loss-Optimization"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-800"
                            >
                              <FaGithub className="text-left" size={20} />
                            </a>
                          </div>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">May 2021 ~ Dec. 2021</p>
                        </div>
              
                        <div className="flex justify-between items-center">
                          <p className="italic">Sungkyunkwan University</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        
                        <ul className="list-disc pl-5">
                          <li>
                            Engaged with research team to boost open set recognition in ResNet models by 9%p via latent space manipulation
                          </li>
                          <li>
                            Developed and deployed a remote automated testing and optimization framework for models using PyTorch
                          </li>
                          <li>
                            Presented research findings at the Korean Science High School R&E Conference
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Student Researcher</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Apr. 2020 ~ Jun. 2021</p>
                        </div>
              
                        <div className="flex justify-between items-center">
                          <p className="italic">Seoul Science High School</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        
                        <ul className="list-disc pl-5">
                          <li>
                            Investigated topics on advertisement classification and recommendation using OCR and clustering algorithms
                          </li>
                          <li>
                            Refined k-means clustering to enhance classification accuracy, adapting to the temporal dynamics of user interests
                          </li>
                          <li>
                            Demonstrated algorithm adaptability to temporal features through rigorous testing and analysis
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
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
                  <div>
                    <div className="space-y-8 pt-4">
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">
                            Spatio-Temporal Predictive Learning with Wavelet-based Attention
                          </h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Jul. 2024 ~ Present</p>
                        </div>

                        <ul className="list-disc pl-5">
                          <li>
                            Investigated spatio-temporal encoding methods of videos using discrete wavelet transforms and NAFNet blocks
                          </li>
                          <li>
                            Utilized 4D motion tensor computations and predictions with transformers for U-Net latent space operations
                          </li>
                          <li>
                            Built training infrastructure with PyTorch Lightning and leveraged Docker and MLFlow for streamlined research
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">RL Wildfire Optimization</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">May. 2024 ~ Present</p>
                        </div>

                        <ul className="list-disc pl-5">
                          <li>
                            Utilized Convolutional DQN models to optimize firefighting efforts and evacuation routes with wildfires
                          </li>
                          <li>
                            Developed complex wildfire simulation incorporating population density, terrain, weather, and crowd dynamics
                          </li>
                          <li>
                            Theorized dynamic custom action and state space utilizing one-hot encoding and action masks
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Contextual-Diffusion</h3>
                            <a
                              href="https://github.com/AWC2124R/GPT4-Contextual-Diffusion"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-800"
                            >
                              <FaGithub className="text-left" size={20} />
                            </a>
                          </div>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Feb. 2023 ~ Aug. 2023</p>
                        </div>

                        <ul className="list-disc pl-5">
                          <li>
                            Improved cohesion and features of Stable Diffusion model output utilizing spatial context from LLMs
                          </li>
                          <li>
                            Developed pipeline incorporating Mask-RCNN models as translation layers between LLMs and Stable Diffusion
                          </li>
                          <li>
                            Generated and annotated image segmentation datasets for supervised learning of Mask-RCNN models
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Animal Shogi AI</h3>
                            <a
                              href="https://github.com/AWC2124R/Animal-Shogi-Bot"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-800"
                            >
                              <FaGithub className="text-left" size={20} />
                            </a>
                          </div>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Mar. 2021 ~ Nov. 2021</p>
                        </div>
                        
                        <ul className="list-disc pl-5">
                          <li>
                            Programmed an Animal Shogi bot using a minimax algorithm with alpha-beta pruning in C++
                          </li>
                          <li>
                            Implemented interactable game GUI and cross-language translation mechanism with Python
                          </li>
                          <li>
                            Demonstrated bot with live play-testing at school festival to 350+ students and faculty
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
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
                  <div>
                    <div className="space-y-8 pt-4">
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">ICPC 2023 ECNA Regional Participant</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Sep. 2023</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="italic">Purdue University</p>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>
                        <ul className="list-disc pl-5">
                          <li>
                            Ranked in the Top 20 in Purdue&apos;s ICPC participant selection contest
                          </li>
                          <li>
                            Led team of 3 in the ICPC East Central North America regional contest among 5 other Purdue ICPC teams
                          </li>
                          <li>
                            Solved problems utilizing competitive programming techniques such as dynamic programming and backtracking
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Hello World Hackathon Participant</h3>
                            <a
                              href="https://github.com/AWC2124R/Health-App"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-gray-800"
                            >
                              <FaGithub className="text-left" size={20} />
                            </a>
                          </div>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Sep. 2023</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="italic">Purdue University</p>
                          <p className="italic text-right">West Lafayette, IN</p>
                        </div>
                        <ul className="list-disc pl-5">
                          <li>
                            Led a team of 4 in a 24-hour hackathon driving project development and collaboration
                          </li>
                          <li>
                            Built a software pipeline utilizing LLMs to deliver personalized dietary text feedback to users
                          </li>
                          <li>
                            Built a full-stack web app with a React front-end and ExpressJS back-end integrating MongoDB RestAPIs
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Published Author on Neural Network Fundamentals</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Sep. 2021 ~ Mar. 2022</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="italic">Barun Books Co., Ltd</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        <ul className="list-disc pl-5">
                          <li>
                            Authored a 160-page book on neural networks covering backpropagation, gradient descent, and parallelization
                          </li>
                          <li>
                            Distributed to 13 retailers, selling 300+ copies in the first year
                          </li>
                          <li>
                            Ranked as a top 4 entry in the “Weekly Top Releases” by the second-largest South Korean book retailer
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Artificial Intelligence Lecturer</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">May 2021 ~ Apr. 2023</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="italic">Seoul Science High School</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        <ul className="list-disc pl-5">
                          <li>
                            Presented 8 deep learning-focused lectures to an audience of 200+ students and faculty
                          </li>
                          <li>
                            Delivered lectures on topics including linear algebra, conventional neural networks, and transformers
                          </li>
                          <li>
                            Conducted 10 additional interdisciplinary volunteer lectures focused on mathematics and artificial intelligence
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex justify-between items-center space-x-2">
                          <h3 className="text-lg font-bold">Artificial Intelligence Club President</h3>
                          <div className="h-0.5 flex-grow bg-black"></div>
                          <p className="text-right">Mar. 2021 ~ Feb. 2023</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="italic">Seoul Science High School</p>
                          <p className="italic text-right">Seoul, South Korea</p>
                        </div>
                        <ul className="list-disc pl-5">
                          <li>
                            Authored 4 different entry exams on mathematical deep learning and essays on model selection
                          </li>
                          <li>
                            Curated literature and project content with paper readings and specialized datasets
                          </li>
                          <li>
                            Supervised and managed the acquisition of a multi-GPU deep learning server for club research and projects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
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
                  <div>
                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Purdue Office of Undergraduate Research Grant</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Purdue University, 2024</p>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Dean&apos;s List & Semester Honors</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Purdue University, 2023 & 2024</p>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Excellence Award in the Gifted School Research Conference</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Pohang University of Science & Technology, 2022</p>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Top Award for R&E Research in Computer Science</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Seoul Science High School, 2022</p>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Azure AI Fundamentals Certification</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Microsoft, 2022</p>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <p className="font-bold">Top Award for Independent Research on Computer Science</p>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Seoul Science High School, 2021</p>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
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
                  <ul className="list-disc pl-5 pt-4 space-y-6">
                    <li>
                      <span className="font-bold">Languages & Frameworks:</span>{' '}
                      Python, C/C++, React, Flask, Java, JavaScript, TypeScript, Express.js, Next.js, HTML/CSS, x86 Assembly, Bash
                    </li>
                    <li>
                      <span className="font-bold">Dev & Research Tools:</span>{' '}
                      Git/GitHub, VS Code, PyCharm, VS Code, Visual Studio, IntelliJ, Slurm, Docker, MLFlow, LaTeX, Overleaf
                    </li>
                    <li>
                      <span className="font-bold">Libraries:</span>{' '}
                      PyTorch, PyTorch Lightning, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, OpenCV
                    </li>
                  </ul>
                  {/* Home Button */}
                  <div className="flex justify-center mb-8 pt-10">
                    <Link
                      href="/"
                      className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
                    >
                      <FaHouseChimney className="mr-2" />
                      Back to Main Page
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}