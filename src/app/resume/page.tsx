// src/app/resume/page.tsx
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 text-black flex flex-col">
      <h1 className="text-3xl font-bold text-center">My Resume</h1>
      {/* Detailed Resume Content */}
      <div className="mt-8 max-w-2xl mx-auto space-y-4 flex-grow">
        { }
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="px-6 py-3 text-white bg-black hover:bg-gray-800 transition-transform duration-200 transform hover:scale-105 hover:scale-x-110"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-black mt-8">
        © {new Date().getFullYear()} Taehoon Hwang. All rights reserved.
      </footer>
    </div>
  )
}
