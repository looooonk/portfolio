import type { ReactNode } from "react";
import { IoDocumentText } from "react-icons/io5";
import ResumeEntry, { type EntryLink } from "./resume-entry";

interface PublicationEntryProps {
    name: string;
    range: string;
    authors: string;
    venue: string;
    link?: string;
    children?: ReactNode;
}

function PublicationEntry({ name, range, authors, venue, link, children }: PublicationEntryProps) {
    const links: EntryLink[] = link
        ? [{ href: link, label: `${name} publication`, icon: <IoDocumentText size={18} /> }]
        : [];

    return (
        <ResumeEntry
            title={name}
            range={range}
            titleLinks={links}
            subtitle={authors}
            location={venue}
        >
            {children}
        </ResumeEntry>
    );
}

export default function Publications() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <PublicationEntry
                name="LiveNewsBench: Evaluating LLM Web Search Capabilities with Freshly Curated News"
                range="Feb. 2026"
                authors="Yunfan Zhang, Kathleen McKeown, Smaranda Muresan"
                venue="ICML 2026"
                link="https://openreview.net/pdf?id=8fIsZEGmh1"
            >
                <p className="text-muted-foreground">
                    Large Language Models (LLMs) with agentic web search capabilities show strong potential for tasks requiring real-time information access and complex fact retrieval, yet evaluating such systems remains challenging. We introduce LiveNewsBench, a rigorous and regularly updated benchmark designed to assess the agentic web search abilities of LLMs.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                    Contributor (not author).
                </p>
            </PublicationEntry>

            <PublicationEntry
                name="Spacer: Towards Engineered Scientific Inspiration"
                range="Aug. 2025"
                authors="Minhyeong Lee et al."
                venue="arXiv"
                link="https://arxiv.org/abs/2508.17661"
            >
                <p className="text-muted-foreground">
                    Recent advances in LLMs have made automated scientific research the next frontline in the path to artificial superintelligence. However, these systems are bound either to tasks of narrow scope or the limited creative capabilities of LLMs. We propose Spacer, a scientific discovery system that develops creative and factually grounded concepts without external intervention.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                    Co-author.
                </p>
            </PublicationEntry>
        </div>
    );
}
