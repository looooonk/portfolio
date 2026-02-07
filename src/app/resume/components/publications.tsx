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
                        <h3 className="text-lg font-bold text-gray-800 lg:whitespace-nowrap min-w-0 flex-1 break-words">{name}</h3>
                        {link && icon && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
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
                    <p className="italic text-left text-gray-700 sm:text-right lg:whitespace-nowrap sm:shrink-0">{range}</p>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mt-1">
                    <p className="text-gray-700">{institution}</p>
                    <p className="italic text-left text-gray-600 sm:text-right lg:whitespace-nowrap">{location}</p>
                </div>

                {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
            </div>
        </div>
    );
}

export default function Publications() {
    return (
        <div>
            <div className="pt-4 space-y-12 mb-20">
                <PublicationEntry
                    name="Spacer: Towards Engineered Scientific Inspiration"
                    range="Aug. 25th 2025"
                    institution="Minhyeong Lee et al."
                    location="arXiv"
                    link="https://arxiv.org/abs/2508.17661"
                    icon={<IoDocumentText className="text-left text-black" size={20} />}
                >
                    <ul className="list-disc pl-5">
                        <p>
                            Recent advances in LLMs have made automated scientific research the next frontline in the path to artificial superintelligence. However, these systems are bound either to tasks of narrow scope or the limited creative capabilities of LLMs. We propose Spacer, a scientific discovery system that develops creative and factually grounded concepts without external intervention.
                        </p>
                    </ul>
                </PublicationEntry>
            </div>
        </div>
    );
}
