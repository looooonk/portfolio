import { FaGithub } from 'react-icons/fa'

interface ActivityEntryProps {
    name: string;
    range: string;
    institution: string;
    location: string;
    link?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

function ActivityEntry({ name, range, institution, location, link, icon, children }: ActivityEntryProps) {
    return (
        <div
            className="relative flex flex-col gap-4 p-6 rounded-xl hover:scale-[102%] hover:z-10 transition-all duration-300 sm:flex-row sm:space-x-4"
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
            {/* Textual content */}
            <div className="flex-1 min-w-0 relative z-10">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex items-center gap-2 flex-nowrap min-w-0 sm:min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 lg:whitespace-nowrap min-w-0 flex-1 break-words">{name}</h3>
                        {link && icon && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
                            >
                                {icon}
                            </a>
                        )}
                    </div>
                    <div
                        className="h-0.5 w-full transition-all duration-300 sm:flex-1"
                        style={{
                            background: `linear-gradient(90deg,
                                rgba(147, 51, 234, 0.6) 0%,
                                rgba(59, 130, 246, 0.6) 100%
                            )`
                        }}
                    />
                    <p className="italic text-left text-gray-700 dark:text-gray-200 sm:text-right lg:whitespace-nowrap sm:shrink-0">{range}</p>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mt-1">
                    <p className="text-gray-700 dark:text-gray-200">{institution}</p>
                    <p className="italic text-left text-gray-600 dark:text-gray-300 sm:text-right lg:whitespace-nowrap">{location}</p>
                </div>

                {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
            </div>
        </div>
    );
}

export default function Activities() {
    return (
        <div>
            <div className="pt-4 space-y-12 mb-20">
                <ActivityEntry
                    name="Purdue Hackers Member"
                    range="Jan. 2025 - May 2025"
                    institution="Purdue University"
                    location="West Lafayette, IN"
                >
                    <ul className="list-disc pl-5">
                        <li>
                            Participated in weekly &apos;hack&apos; sessions and developed projects involving full-stack web development
                        </li>
                        <li>
                            Developing website for course scheduling at Purdue with Next.js, MongoDB, and Python among team of 3
                        </li>
                    </ul>
                </ActivityEntry>
                <ActivityEntry
                    name="ICPC 2023 ECNA Regional Participant"
                    range="Sep. 2023"
                    institution="Purdue University"
                    location="West Lafayette, IN"
                >
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
                </ActivityEntry>
                <ActivityEntry
                    name="Hello World Hackathon Participant"
                    range="Sep. 2023"
                    institution="Purdue University"
                    location="West Lafayette, IN"
                    link="https://github.com/looooonk/Health-App"
                    icon={<FaGithub className="text-left" size={20} />}
                >
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
                </ActivityEntry>
                <ActivityEntry
                    name="Published Author on Neural Network Fundamentals"
                    range="Sep. 2021 - Mar. 2022"
                    institution="Barun Books Co., Ltd"
                    location="Seoul, South Korea"
                >
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
                </ActivityEntry>
                <ActivityEntry
                    name="Artificial Intelligence Lecturer"
                    range="May 2021 - Apr. 2023"
                    institution="Seoul Science High School"
                    location="Seoul, South Korea"
                >
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
                </ActivityEntry>
                <ActivityEntry
                    name="Artificial Intelligence Club President"
                    range="Mar. 2021 - Feb. 2023"
                    institution="Seoul Science High School"
                    location="Seoul, South Korea"
                >
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
                </ActivityEntry>
            </div>
        </div>
    );
}
