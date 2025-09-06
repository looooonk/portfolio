// experience.tsx
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import React from "react";
import Image from "next/image";

const logos: Record<string, string> = {
    "Asteromorph": "/emblems/asteromorph.jpeg",
    "Purdue University": "/emblems/purdue.png",
    "Quantum Research Sciences": "/emblems/qrs.png",
    "Seoul Science High School": "/emblems/sshs.png",
    "Sungkyunkwan University": "/emblems/skku.png",
};

interface ExperienceEntryProps {
    title: string;
    organization: string;
    location: string;
    range: string;
    organizationLink?: string;
    repoLink?: string;
    children?: React.ReactNode;
}

function ExperienceEntry({
    title,
    organization,
    location,
    range,
    organizationLink,
    repoLink,
    children,
}: ExperienceEntryProps) {
    return (
        <div
            className="relative flex space-x-4 p-6 rounded-xl hover:scale-[102%] hover:z-10 transition-all duration-300"
            style={{
                background: `
                    linear-gradient(135deg,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(255, 255, 255, 0.05) 100%
                    ),
                    linear-gradient(135deg,
                        rgba(147, 51, 234, 0.1) 0%,
                        rgba(59, 130, 246, 0.1) 100%
                    )
                `,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}
        >
            {/* Logo container */}
            <div className="flex-shrink-0 w-12 h-12 relative z-10">
                <Image
                    fill={true}
                    src={logos[organization]}
                    alt={`${organization} logo`}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                />
            </div>

            {/* Textual content */}
            <div className="flex-1 relative z-10">
                <div className="flex justify-between items-center space-x-2">
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    <div
                        className="h-0.5 flex-grow transition-all duration-300"
                        style={{
                            background: `linear-gradient(90deg,
                                rgba(147, 51, 234, 0.6) 0%,
                                rgba(59, 130, 246, 0.6) 100%
                            )`
                        }}
                    />
                    <p className="italic text-right text-gray-700">{range}</p>
                </div>

                <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center space-x-2">
                        <p className="italic text-gray-700">{organization}</p>
                        {organizationLink && (
                            <a
                                href={organizationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <BiWorld size={15} />
                            </a>
                        )}
                        {repoLink && (
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <FaGithub size={18} />
                            </a>
                        )}
                    </div>
                    <p className="italic text-right text-gray-600">{location}</p>
                </div>

                {children && <div className="pl-4 mt-2">{children}</div>}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="pt-4 space-y-12 mb-20">
            <ExperienceEntry
                title="Artificial Intelligence Research Intern"
                organization="Asteromorph"
                organizationLink="https://www.asteromorph.com/"
                location="Seoul, South Korea"
                range="May. 2025 - Aug. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Worked with fine-tuning and hosting large-scale local LLMs (&gt;200B parameters) on multi-GPU servers using vLLM and llama.cpp
                    </li>
                    <li>
                        Developed an in-house LLM fine-tuning methodology & framework by writing kernel code with PyTorch, Unsloth, and Hugging Face libraries
                    </li>
                    <li>
                        Deployed a parallel LLM fine-tuning scheduler and metric dashboard using Ray, Grafana, Prometheus, and Docker
                    </li>
                    <li>
                        Worked on the technical report <em>Spacer: Towards Engineered Scientific Inspiration</em> as a contributor and author
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Undergraduate Teaching Assistant"
                organization="Purdue University"
                location="West Lafayette, IN"
                range="Jan. 2025 - May 2025"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        UTA for&nbsp;CS 18200 (Discrete Mathematics), CS 18200H (Honors Discrete Mathematics) and CS 24000 (Programming
                        in C)
                    </li>
                    <li>Held office hours, lab sessions, and graded assignments</li>
                    <li>
                        Ran problem-solving sessions on first-order logic, set theory, etc.
                    </li>
                    <li>
                        Assisted students with UNIX, file I/O, dynamic memory allocation,
                        and more
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Undergraduate Research Assistant"
                organization="Purdue University"
                location="West Lafayette, IN"
                range="Jan. 2024 - Dec. 2024"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Built a demand-forecasting pipeline that merges probability curves
                        with an LSTM encoder
                    </li>
                    <li>Cut inference storage &gt;99% relative to conventional DL models</li>
                    <li>
                        Performed latent-space analysis to visualize composite encodings of
                        demand features
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Machine Learning Engineer Intern"
                organization="Quantum Research Sciences"
                organizationLink="https://quantumresearchsciences.com/"
                location="West Lafayette, IN"
                range="Sep. 2023 - Aug. 2024"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Deployed ML software for the United States Air Force using statistical
                        and algorithmic techniques
                    </li>
                    <li>
                        Ran Monte Carlo simulations to test and tune quantum algorithms for
                        inventory management
                    </li>
                    <li>
                        Developed an end-user analytics interface for quantum inventory
                        management
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Student Researcher"
                organization="Seoul Science High School"
                location="Seoul, South Korea"
                range="Mar. 2022 - Dec. 2022"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Enhanced real-time landmark tracking via machine-learning techniques
                    </li>
                    <li>
                        Reduced untracked frames in Google MediaPipe by 91.7% with U-Net
                        segmentation
                    </li>
                    <li>
                        Designed a versatile multi-headed software pipeline adaptable to diverse
                        hardware constraints
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Research Assistant"
                organization="Sungkyunkwan University"
                repoLink="https://github.com/looooonk/OSR-Loss-Optimization"
                location="Seoul, South Korea"
                range="May 2021 - Dec. 2021"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Boosted open-set recognition in ResNet models by 9%p through latent
                        space manipulation
                    </li>
                    <li>
                        Built a remote, automated testing/optimization framework in PyTorch
                    </li>
                    <li>
                        Presented findings at the Korean Science High School R&amp;E Conference
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Student Researcher"
                organization="Seoul Science High School"
                location="Seoul, South Korea"
                range="Apr. 2020 - Jun. 2021"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Investigated ad-classification and recommendation using OCR  &amp;
                        clustering
                    </li>
                    <li>
                        Refined k-means to handle temporal dynamics of user interests
                    </li>
                    <li>
                        Demonstrated adaptive behaviour through rigorous temporal testing
                    </li>
                </ul>
            </ExperienceEntry>
        </div>
    );
}
