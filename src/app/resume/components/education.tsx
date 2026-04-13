import Course from "./course";
import Image from "next/image";

const emblems: Record<string, string> = {
    "Columbia University": "/emblems/columbia.png",
    "Columbia": "/emblems/columbia.png",
    "Purdue University": "/emblems/purdue.png",
    "Purdue": "/emblems/purdue.png",
    "Seoul Science High School": "/emblems/sshs.png",
    "Seoul Science HS": "/emblems/sshs.png",
};

interface EducationEntryProps {
    name: string;
    location: string;
    degreeOrNotes: string;
    range: string;
    children?: React.ReactNode;
}

function EducationEntry({ name, location, degreeOrNotes, range, children }: EducationEntryProps) {
    return (
        <div className="flex gap-4 border-b border-border pb-6 sm:gap-5">
            <div className="flex-shrink-0 w-10 h-10 relative mt-0.5">
                <Image
                    fill={true}
                    src={emblems[name]}
                    alt={`${name} emblem`}
                    className="object-contain"
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    <p className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">{location}</p>
                </div>

                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-0.5">
                    <p className="text-muted-foreground whitespace-pre-line">{degreeOrNotes}</p>
                    <p className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">{range}</p>
                </div>

                {children && <div className="mt-3">{children}</div>}
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <EducationEntry
                name="Columbia University"
                location="New York, NY"
                degreeOrNotes="B.S. in Computer Science"
                range="Aug. 2025 - May 2027"
            >
                <div className="space-y-2">
                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-baseline sm:gap-6">
                        <span>
                            <span className="font-semibold">GPA:</span> 3.98 / 4.33
                        </span>
                        <span>
                            <span className="font-semibold">Core GPA:</span> 4.17 / 4.33
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start">
                        <span className="font-semibold sm:whitespace-nowrap">
                            Relevant Courses:
                        </span>
                        <div className="mt-1 flex-1 max-w-full break-words sm:mt-0 sm:ml-2 sm:max-w-[60%] text-sm sm:text-base">
                            <Course name="Computer Science Theory" code="COMS W3261" semester="Took Fall 2025" grade="A+"/>, {" "}
                            <Course name="Programming Languages and Translators" code="COMS W4115" semester="Taking Fall 2025" grade="A"/>, {" "}
                            <Course name="Introduction to Databases" code="COMS W4111" semester="Taking Fall 2025" grade="A+"/>, {" "}
                            <Course name="Projects in Computer Science" code="COMS W4901" semester="Taking Fall 2025" grade="A"/>, {" "}
                            <Course name="Theory ML Interaction" code="COMS W4995" semester="Taking Spring 2026"/>, {" "}
                            <Course name="Natural Language Processing" code="COMS W4705" semester="Taking Spring 2026"/>
                        </div>
                    </div>
                </div>
            </EducationEntry>

            <EducationEntry
                name="Purdue University"
                location="West Lafayette, IN"
                degreeOrNotes="B.S. in Computer Science, Minor in Mathematics, Machine Intelligence and Algorithmic Foundations Track"
                range="Aug. 2023 - May 2025"
            >
                <div className="space-y-2">
                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-baseline sm:gap-6">
                        <span>
                            <span className="font-semibold">GPA:</span> 4.00 / 4.00
                        </span>
                        <span>
                            <span className="font-semibold">Core GPA:</span> 4.00 / 4.00
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start">
                        <span className="font-semibold sm:whitespace-nowrap">
                            Relevant Courses:
                        </span>
                        <div className="mt-1 flex-1 max-w-full break-words sm:mt-0 sm:ml-2 sm:max-w-[60%] text-sm sm:text-base">
                            <Course name="Probability" code="MA 41600" semester="Took Spring 2024" grade="A+" />, {" "}
                            <Course name="Linear Algebra" code="MA 26500" semester="Took Fall 2023" grade="A+" />, {" "}
                            <Course name="Quantum ML Research" code="PHYS 49000ZF" semester="Took Spring 2024" grade="A+" />, {" "}
                            <Course name="Discrete Mathematics" code="CS 18200" semester="Took Spring 2024" grade="A+" />, {" "}
                            <Course name="Programming in C" code="CS 24000" semester="Took Spring 2024" grade="A+" />, {" "}
                            <Course name="Computer Architecture" code="CS 25000" semester="Took Fall 2024" grade="A+" />, {" "}
                            <Course name="Data Structures" code="CS 25100" semester="Took Fall 2024" grade="A+" />, {" "}
                            <Course name="Statistical Methods" code="STAT 51100" semester="Took Fall 2024" grade="A" />, {" "}
                            <Course name="Competitive Programming I" code="CS 21100" semester="Took Spring 2024" grade="A+" />, {" "}
                            <Course name="Competitive Programming II" code="CS 31100" semester="Took Fall 2024" grade="P" />, {" "}
                            <Course name="Foundations of Deep Learning" code="CS 58700" semester="Took Spring 2025" grade="A" />, {" "}
                            <Course name="Data Mining & Machine Learning" code="CS 37300" semester="Took Spring 2025" grade="A" />, {" "}
                            <Course name="Introduction to Artificial Intelligence" code="CS 47100" semester="Took Spring 2025" grade="A+" />
                        </div>
                    </div>
                </div>
            </EducationEntry>

            <EducationEntry
                name="Seoul Science High School"
                location="Seoul, South Korea"
                degreeOrNotes="32nd Cohort, Granted early admission"
                range="Mar. 2020 - Feb. 2023"
            />
        </div>
    );
}
