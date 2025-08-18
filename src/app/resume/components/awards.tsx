import type { ReactNode } from "react";

const emblems: Record<string, string> = {
    "Purdue University": "/emblems/purdue.png",
    "Microsoft": "/emblems/microsoft.png",
    "Pohang University": "/emblems/postech.png",
    "Seoul Science High School": "/emblems/sshs.png",
};

interface AwardEntryProps {
    name: string;
    title: string;
    issuer: string;
    year: string;
    children?: ReactNode;
}

function AwardEntry({ name, title, issuer, year, children }: AwardEntryProps) {
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
                <img
                    src={emblems[name]}
                    alt={`${name} emblem`}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                />
            </div>

            {/* Textual content */}
            <div className="flex-1 relative z-10">
                <div className="flex justify-between items-center space-x-2">
                    <p className="text-lg font-bold text-gray-800">{title}</p>
                    <div
                        className="h-0.5 flex-grow transition-all duration-300"
                        style={{
                            background: `linear-gradient(90deg,
                                rgba(147, 51, 234, 0.6) 0%,
                                rgba(59, 130, 246, 0.6) 100%
                            )`
                        }}
                    />
                    <p className="italic text-right text-gray-700">{issuer}, {year}</p>
                </div>

                {children && <p className="mt-2 text-gray-700">{children}</p>}
            </div>
        </div>
    );
}

const awards = [
    {
        name: "Purdue University",
        title: "Purdue Office of Undergraduate Research Grant",
        issuer: "Purdue University",
        year: "2024",
        description:
            <>Received $500 from the OUR for project&nbsp;
                <span className="italic">WUMT: Wavelet U-Net Motion Transformer</span>.
            </>,
    },
    {
        name: "Purdue University",
        title: "Dean's List & Semester Honors",
        issuer: "Purdue University",
        year: "2023, 2024, 2025",
        description:
            "Earned both Dean's List and Semester Honors for Fall 2023, Spring 2024, Fall 2024, and Spring 2025.",
    },
    {
        name: "Pohang University",
        title: "Excellence Award for the Gifted School Research Conference",
        issuer: "Pohang University of Science & Technology",
        year: "2022",
        description:
            "Recognized for a presentation on open-set recognition with ResNet models.",
    },
    {
        name: "Seoul Science High School",
        title: "Top Award for R&E Research in Computer Science",
        issuer: "Seoul Science High School",
        year: "2022",
        description:
            "Improved open-set recognition accuracy in ResNet models.",
    },
    {
        name: "Microsoft",
        title: "Azure AI Fundamentals Certification",
        issuer: "Microsoft",
        year: "2022",
        description:
            "Achieved AZ-900 certification on AI and Microsoft Azure fundamentals.",
    },
    {
        name: "Seoul Science High School",
        title: "Top Award for Independent Research in Computer Science",
        issuer: "Seoul Science High School",
        year: "2021",
        description:
            "Developed advertisement classification using OCR and semantic tree matching.",
    },
] as const;

export default function Awards() {
    return (
        <div className="pt-4 space-y-12">
            {awards.map(a => (
                <AwardEntry
                    name={a.name}
                    key={a.title}
                    title={a.title}
                    issuer={a.issuer}
                    year={a.year}
                >
                    {a.description}
                </AwardEntry>
            ))}
        </div>
    );
}
