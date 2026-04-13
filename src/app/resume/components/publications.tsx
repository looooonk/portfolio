import { IoDocumentText } from "react-icons/io5";

interface PublicationEntryProps {
    name: string;
    range: string;
    institution: string;
    location: string;
    link?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

function PublicationEntry({ name, range, institution, location, link, icon, children }: PublicationEntryProps) {
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

export default function Publications() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <PublicationEntry
                name="Spacer: Towards Engineered Scientific Inspiration"
                range="Aug. 25th 2025"
                institution="Minhyeong Lee et al."
                location="arXiv"
                link="https://arxiv.org/abs/2508.17661"
                icon={<IoDocumentText className="text-muted-foreground" size={18} />}
            >
                <ul className="list-disc pl-5">
                    <p>
                        Recent advances in LLMs have made automated scientific research the next frontline in the path to artificial superintelligence. However, these systems are bound either to tasks of narrow scope or the limited creative capabilities of LLMs. We propose Spacer, a scientific discovery system that develops creative and factually grounded concepts without external intervention.
                    </p>
                </ul>
            </PublicationEntry>
        </div>
    );
}
