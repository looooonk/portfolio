// src/app/page.tsx
'use client';

import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ClientWrapper from "./clientwrapper";
import Resume from './resume/resume';

export default function Home() {
    return (
        <ClientWrapper>
            {/* Computer View */}
            <div className="flex flex-col min-h-screen hidden lg:block">
                {/* Upper Portion */}
                <div className="flex items-center justify-center p-10 space-x-20 w-70">
                    {/* Photo */}
                    <div className="mr-8">
                        <Image
                            src="/me.jpg"
                            alt="Me!"
                            width={260}
                            height={260}
                            className="object-cover"
                        />
                    </div>

                    {/* Name and Info */}
                    <div className="space-y-5">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold text-black">Taehoon Hwang</h1>
                            <div className="h-1 w-full bg-black"></div>
                        </div>
                        <div className="text-xl text-black mt-2">
                            <p className="flex">
                                <span className="w-80">Computer Science Undergraduate</span>
                                <span className="mx-2 text-gray-500">@</span>
                                <span className="font-bold text-gray-500">Columbia University</span>
                            </p>
                        </div>
                        <p className="text-xl text-gray-600 mt-2 font-mono">Contact me at: taehoon.h [at] columbia [dot] edu</p>

                        {/* Social Links */}
                        <div className="flex space-x-6">
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
                        </div>
                    </div>
                </div>

                <Resume />
            </div>
            {/* Mobile View */}
            <div className="flex flex-col min-h-screen lg:hidden">
                {/* Photo */}
                <div className="flex items-center justify-center pt-10">
                    <Image
                        src="/me.jpg"
                        alt="Me!"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>
                <div className="flex items-center justify-center p-10 space-x-20 w-70">

                    {/* Name and Info */}
                    <div className="space-y-5">
                        <div className="flex flex-col gap-4 items-center">
                            <h1 className="text-5xl font-bold text-black">Taehoon Hwang</h1>
                            <div className="h-1 w-full bg-black"></div>
                        </div>
                        <div className="text-xl text-black mt-2">
                            <p className="flex">
                                <span className="w-60">CS Undergraduate</span>
                                <span className="mx-2 text-gray-500">@</span>
                                <span className="font-bold text-gray-500">Columbia</span>
                            </p>
                            <p className="flex">
                                <span className="w-60">AI Research Intern</span>
                                <span className="mx-2 text-gray-500">@</span>
                                <span className="font-bold text-gray-500">Asteromorph</span>
                            </p>
                        </div>
                        <p className="text-xl text-gray-600 mt-2 font-mono">taehoon.h [at] columbia [dot] edu</p>

                        {/* Social Links */}
                        <div className="flex space-x-6">
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
                        </div>
                    </div>
                </div>

                <Resume />
            </div>
        </ClientWrapper>
    )
}
