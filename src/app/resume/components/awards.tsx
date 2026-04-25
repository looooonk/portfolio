import type { ReactNode } from "react";
import Image from "next/image";

const emblems: Record<string, string> = {
    "Purdue University": "/emblems/purdue.png",
    "Microsoft": "/emblems/microsoft.png",
    "Pohang University": "/emblems/postech.png",
    "Seoul Science High School": "/emblems/sshs.png",
    "Columbia University": "/emblems/columbia.png",
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
        <div className="flex gap-4 border-b border-border pb-6 sm:gap-5">
            <div className="flex-shrink-0 w-10 h-10 relative mt-0.5">
                <Image
                    fill
                    src={emblems[name]}
                    alt={`${name} emblem`}
                    className="object-contain"
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-lg font-bold text-foreground">{title}</p>
                    <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{issuer}, {year}</p>
                </div>

                {children && <p className="mt-1.5 text-muted-foreground">{children}</p>}
            </div>
        </div>
    );
}

const awards = [
    {
        name: "Columbia University",
        title: "Dean's List",
        issuer: "Columbia University",
        year: "2025",
        description:
            "Earned Dean's List designation for Fall 2025.",
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
        <div className="pt-4 space-y-8 mb-20">
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
