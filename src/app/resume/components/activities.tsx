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
        <div className="border-b border-border pb-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    {link && icon && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {icon}
                        </a>
                    )}
                </div>
                <p className="text-sm italic text-muted-foreground whitespace-nowrap">{range}</p>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-0.5">
                <p className="text-muted-foreground">{institution}</p>
                <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{location}</p>
            </div>

            {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
        </div>
    );
}

export default function Activities() {
    return (
        <div className="pt-4 space-y-8 mb-20">
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
                icon={<FaGithub size={16} />}
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
                        Ranked as a top 4 entry in the &quot;Weekly Top Releases&quot; by the second-largest South Korean book retailer
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
    );
}
