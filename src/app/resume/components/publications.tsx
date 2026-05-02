import type { ReactNode } from "react";
import { IoDocumentText } from "react-icons/io5";
import IconLink from "@/components/icon-link";

interface PublicationEntryProps {
    name: string;
    range: string;
    institution: string;
    location: string;
    link?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

function PublicationEntry({
    name,
    range,
    institution,
    location,
    link,
    icon,
    children,
}: PublicationEntryProps) {
    return (
        <div className="border-b border-border pb-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    {link && icon && (
                        <IconLink
                            href={link}
                            label={`${name} publication`}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {icon}
                        </IconLink>
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

export default function Publications() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <PublicationEntry
                name="LiveNewsBench: Evaluating LLM Web Search Capabilities with Freshly Curated News"
                range="May 2026"
                institution="Yunfan Zhang, Kathleen McKeown, Smaranda Muresan"
                location="ICML 2026"
                link="https://arxiv.org/abs/2602.13543"
                icon={<IoDocumentText className="text-muted-foreground" size={18} />}
            >
                <p className="text-muted-foreground">
                    Large Language Models (LLMs) with agentic web search capabilities show strong potential for tasks requiring real-time information access and complex fact retrieval, yet evaluating such systems remains challenging. We introduce LiveNewsBench, a rigorous and regularly updated benchmark designed to assess the agentic web search abilities of LLMs.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                    Contributor, not author.
                </p>
            </PublicationEntry>

            <PublicationEntry
                name="Spacer: Towards Engineered Scientific Inspiration"
                range="Aug. 2025"
                institution="Minhyeong Lee et al."
                location="arXiv"
                link="https://arxiv.org/abs/2508.17661"
                icon={<IoDocumentText className="text-muted-foreground" size={18} />}
            >
                <p className="text-muted-foreground">
                    Recent advances in LLMs have made automated scientific research the next frontline in the path to artificial superintelligence. However, these systems are bound either to tasks of narrow scope or the limited creative capabilities of LLMs. We propose Spacer, a scientific discovery system that develops creative and factually grounded concepts without external intervention.
                </p>
            </PublicationEntry>

        </div>
    );
}
