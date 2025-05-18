// src/app/page.tsx
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import ClientWrapper from "./clientwrapper";
// import CommitHistory from './commithistory';

export default function Home() {
  return (
    <ClientWrapper>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Upper Portion */}
        <div className="flex items-center justify-center p-10 space-x-20 bg-namecard-gradient">
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
            <p className="text-2xl text-black mt-2">Computer Science Undergraduate @ Purdue University</p>
            <p className="text-xl text-gray-600 mt-2 font-mono">Contact me at: hwang280 [at] purdue [dot] edu</p>
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

        {/* Center Description */}
        <div className="flex-grow flex flex-col md:flex-row items-start md:items-center justify-center px-4">
          <div className="md:w-4/5 text-center md:text-left">
            <p className="text-2xl text-black text-center mb-8">
              Hello!
            </p>
            <p className="text-2xl text-black text-center mb-8">
              I am currently studying computer science at Purdue University with a minor in mathematics.
            </p>
            <p className="text-2xl text-black text-center mb-8">
              My interests lie in theoretical machine learning, deep learning, and algorithmic optimizations.
            </p>
          </div>
          {/* <div className="md:w-1/2">
            <CommitHistory />
          </div> */}
        </div>
        

        {/* Resume Button */}
        <div className="flex justify-center mb-8">
          <Link
            href="/resume"
            className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800"
          >
            <FaFileAlt className="mr-2" />
            View My Full Resume
          </Link>
        </div>
      </div>
    </ClientWrapper>
  )
}
