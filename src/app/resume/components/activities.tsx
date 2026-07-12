import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import ResumeEntry, { type EntryLink } from "./resume-entry";

interface ActivityEntryProps {
    name: string;
    range: string;
    institution: string;
    location: string;
    repoLink?: string;
    children?: ReactNode;
}

function ActivityEntry({ name, range, institution, location, repoLink, children }: ActivityEntryProps) {
    const links: EntryLink[] = repoLink
        ? [{ href: repoLink, label: `${name} repository`, icon: <FaGithub size={16} /> }]
        : [];

    return (
        <ResumeEntry
            title={name}
            range={range}
            titleLinks={links}
            subtitle={institution}
            location={location}
        >
            {children}
        </ResumeEntry>
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
                        Developed a course scheduling website at Purdue with Next.js, MongoDB, and Python on a team of 3
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
                repoLink="https://github.com/looooonk/Health-App"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Led a team of 4 in a 24-hour hackathon driving project development and collaboration
                    </li>
                    <li>
                        Built a software pipeline utilizing LLMs to deliver personalized dietary text feedback to users
                    </li>
                    <li>
                        Built a full-stack web app with a React front-end and Express.js back-end integrating MongoDB REST APIs
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
        </div>
    );
}
