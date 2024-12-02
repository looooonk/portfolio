// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Upper Portion */}
      <div className="flex items-center justify-center p-10 space-x-20 bg-namecard-gradient">
        {/* Photo */}
        <div className="mr-8">
          <Image
            src="/me.jpg"
            alt="Your Name"
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
          <p className="text-xl text-gray-600 mt-2 font-mono">Contact me at: hwang280 [at] purdue.edu</p>
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600"
            >
              <FaLinkedin size={40} />
            </a>
              <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line
      <div className="flex justify-center my-4">
        <div className="w-full border-t-4 border-black"></div>
      </div> */}

      {/* Center Description */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <p className="text-2xl text-black text-center mb-8">
          I am currently studying computer science at Purdue University with a concentration in Machine Intelligence.
        </p>
        <p className="text-2xl text-black text-center mb-8">
          My interests lie in theoretical machine learning, deep learning, and algorithmic optimizations.
        </p>
      </div>

      {/* Resume Button */}
      <div className="flex justify-center mb-8">
        <Link
          href="/resume"
          className="flex items-center px-6 py-3 text-white bg-black hover:bg-gray-800 transition-transform duration-200 transform hover:scale-105 hover:scale-x-110"
        >
          <FaFileAlt className="mr-2" />
          View My Resume
        </Link>
      </div>


      {/* Footer */}
      <footer className="text-center py-4 text-black">
        © {new Date().getFullYear()} Taehoon Hwang. All rights reserved.
      </footer>
    </div>
  )
}
