// src/app/page.tsx
'use client';

import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaOrcid } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import ClientWrapper from "./clientwrapper";
import Resume from './resume/resume';

export default function Home() {
    return (
        <ClientWrapper>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center gap-8 px-6 pt-10 lg:flex-row lg:gap-16 lg:px-10">
                    <div className="flex-shrink-0">
                        <Image
                            src="/me.jpg"
                            alt="Me!"
                            width={260}
                            height={260}
                            className="object-cover w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]"
                        />
                    </div>

                    <div className="w-full max-w-2xl space-y-5 text-center lg:text-left">
                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <h1 className="text-4xl sm:text-5xl font-bold text-black">Taehoon Hwang</h1>
                            <div className="h-1 w-full bg-black"></div>
                        </div>
                        <div className="text-base sm:text-xl text-black mt-2">
                            <p className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                                <span className="sm:whitespace-nowrap">Computer Science Undergraduate</span>
                                <span className="text-gray-500">@</span>
                                <span className="font-bold text-gray-500">Columbia University</span>
                            </p>
                        </div>
                        <p className="text-base sm:text-xl text-gray-600 mt-2 font-mono break-words">
                            Contact me at: taehoon.h [at] columbia [dot] edu
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
                            <a
                                href="https://www.linkedin.com/in/taehoon-hwang/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaLinkedin size={40} />
                            </a>
                            <a
                                href="https://github.com/looooonk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaGithub size={40} />
                            </a>
                            <a
                                href="https://orcid.org/0009-0005-6452-9258"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaOrcid size={40} />
                            </a>
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <IoDocumentText size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <Resume />
            </div>
        </ClientWrapper>
    )
}
