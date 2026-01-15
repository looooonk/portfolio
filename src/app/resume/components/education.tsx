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
            {/* Emblem container */}
            <div className="flex-shrink-0 w-12 h-12 relative z-10">
                <Image
                    fill={true}
                    src={emblems[name]}
                    alt={`${name} emblem`}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                />
            </div>

            {/* Textual content */}
            <div className="flex-1 relative z-10">
                <div className="flex justify-between items-center space-x-2">
                    <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                    <div 
                        className="h-0.5 flex-grow transition-all duration-300"
                        style={{
                            background: `linear-gradient(90deg, 
                                rgba(147, 51, 234, 0.6) 0%, 
                                rgba(59, 130, 246, 0.6) 100%
                            )`
                        }}
                    />
                    <p className="italic text-right text-gray-700">{location}</p>
                </div>

                <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-700 whitespace-pre-line">{degreeOrNotes}</p>
                    <p className="text-right text-gray-600 whitespace-pre-line">{range}</p>
                </div>

                {children && <div className="pl-4 mt-2">{children}</div>}
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <div>
            { /* Desktop view */}
            <div className="pt-4 space-y-12 hidden lg:block mb-20">
                <EducationEntry
                    name="Columbia University"
                    location="New York, NY"
                    degreeOrNotes="B.S. in Computer Science"
                    range="Aug. 2025 - May 2027"
                >
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-6 pt-2">
                            <span>
                                <span className="font-semibold">GPA:</span> 3.98 / 4.33
                            </span>

                            <span className="inline-flex items-baseline gap-2">
                                <span>
                                <span className="font-semibold">Core GPA:</span> 4.17 / 4.33
                                </span>
                            </span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold whitespace-nowrap">
                                Relevant Courses:
                            </span>
                            <div
                                className="ml-2 flex-1 max-w-[60%] break-keep"
                            >
                                <Course name="Computer Science Theory" code="COMS W3261" semester="Took Fall 2025" grade="A+"/>, {" "}
                                <Course name="Programming Languages and Translators" code="COMS W4115" semester="Taking Fall 2025" grade="A"/>, {" "}
                                <Course name="Introduction to Databases" code="COMS W4111" semester="Taking Fall 2025" grade="A+"/>, {" "}
                                <Course name="Projects in Computer Science" code="COMS W4901" semester="Taking Fall 2025" grade="A"/>, {" "}
                                <Course name="Operating Systems I" code="COMS W4118" semester="Taking Spring 2026"/>, {" "}
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
                        <div className="flex items-baseline gap-6 pt-2">
                            <span>
                                <span className="font-semibold">GPA:</span> 4.00 / 4.00
                            </span>

                            <span>
                                <span className="font-semibold">Core GPA:</span> 4.00 / 4.00
                            </span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold whitespace-nowrap">
                                Relevant Courses:
                            </span>
                            <div
                                className="ml-2 flex-1 max-w-[60%] break-keep"
                            >
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
            { /* Mobile view */}
            <div className="lg:hidden pt-4 space-y-12 mb-20">
                <EducationEntry
                    name="Columbia University"
                    location="New York"
                    degreeOrNotes="B.S. in Computer Science"
                    range={`Aug. 2025 -\nMay 2027`}
                >
                </EducationEntry>

                <EducationEntry
                    name="Purdue University"
                    location="Indiana"
                    degreeOrNotes={`B.S. in Computer Science,\nMinor in Mathematics,\nMachine Intelligence Track`}
                    range={`Aug. 2023 -\nMay 2025`}
                >
                </EducationEntry>

                <EducationEntry
                    name="Seoul Science HS"
                    location="Seoul"
                    degreeOrNotes={`32nd Cohort,\nGranted early admission`}
                    range={`Mar. 2020 -\nFeb. 2023`}
                />
            </div>
        </div>
    );
}