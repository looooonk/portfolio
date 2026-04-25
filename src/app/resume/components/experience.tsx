// experience.tsx
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import type { ReactNode } from "react";
import Image from "next/image";
import IconLink from "@/components/icon-link";
import ResumeImageStrip, { type ResumeItemImage } from "./resume-image-strip";

const logos: Record<string, string> = {
    "Asteromorph": "/emblems/asteromorph.jpeg",
    "Purdue University": "/emblems/purdue.png",
    "Quantum Research Sciences": "/emblems/qrs.png",
    "Seoul Science High School": "/emblems/sshs.png",
    "Sungkyunkwan University": "/emblems/skku.png",
    "Columbia University": "/emblems/columbia.png",
    "Columbia": "/emblems/columbia.png",
};

interface ExperienceEntryProps {
    title: string;
    organization: string;
    location: string;
    range: string;
    organizationLink?: string;
    repoLink?: string;
    images?: ResumeItemImage[];
    showImages?: boolean;
    children?: ReactNode;
}

function ExperienceEntry({
    title,
    organization,
    location,
    range,
    organizationLink,
    repoLink,
    images,
    showImages,
    children,
}: ExperienceEntryProps) {
    return (
        <div className="flex gap-4 border-b border-border pb-6 sm:gap-5">
            <div className="flex-shrink-0 w-10 h-10 relative mt-0.5">
                <Image
                    fill
                    src={logos[organization]}
                    alt={`${organization} logo`}
                    className="object-contain"
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-bold text-foreground">{title}</h3>
                    <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{range}</p>
                </div>

                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between mt-0.5">
                    <div className="flex items-center gap-2">
                        <p className="italic text-muted-foreground">{organization}</p>
                        {organizationLink && (
                            <IconLink
                                href={organizationLink}
                                label={`${organization} website`}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <BiWorld size={14} />
                            </IconLink>
                        )}
                        {repoLink && (
                            <IconLink
                                href={repoLink}
                                label={`${title} repository`}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <FaGithub size={16} />
                            </IconLink>
                        )}
                    </div>
                    <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{location}</p>
                </div>

                {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
                <ResumeImageStrip images={images} showImages={showImages} />
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <ExperienceEntry
                title="Research Assistant"
                organization="Columbia University"
                location="New York, NY"
                range="Sep. 2025 - Present"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Researching better advantage computations in existing post-training methodologies to improve LLM performance
                    </li>
                </ul>
            </ExperienceEntry>
            <ExperienceEntry
                title="Artificial Intelligence Research Intern"
                organization="Asteromorph"
                organizationLink="https://www.asteromorph.com/"
                location="Seoul, South Korea"
                range="May 2025 - Aug. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Worked with fine-tuning and hosting large-scale local LLMs (&gt;200B parameters) on multi-GPU servers using vLLM and llama.cpp
                    </li>
                    <li>
                        Developed an in-house LLM fine-tuning methodology & framework by writing kernel code with PyTorch, Unsloth, and Hugging Face libraries
                    </li>
                    <li>
                        Deployed a parallel LLM fine-tuning scheduler and metric dashboard using Ray, Grafana, Prometheus, and Docker
                    </li>
                    <li>
                        Worked on the technical report <em>Spacer: Towards Engineered Scientific Inspiration</em> as a contributor and author
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Teaching Assistant"
                organization="Purdue University"
                location="West Lafayette, IN"
                range="Jan. 2025 - May 2025"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        UTA for&nbsp;CS 18200 (Discrete Mathematics), CS 18200H (Honors Discrete Mathematics) and CS 24000 (Programming
                        in C)
                    </li>
                    <li>Held office hours, lab sessions, and graded assignments</li>
                    <li>
                        Ran problem-solving sessions on first-order logic, set theory, etc.
                    </li>
                    <li>
                        Assisted students with UNIX, file I/O, dynamic memory allocation,
                        and more
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Research Assistant"
                organization="Purdue University"
                location="West Lafayette, IN"
                range="Jan. 2024 - Dec. 2024"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Built a demand-forecasting pipeline that merges probability curves
                        with an LSTM encoder
                    </li>
                    <li>Cut inference storage &gt;99% relative to conventional DL models</li>
                    <li>
                        Performed latent-space analysis to visualize composite encodings of
                        demand features
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Machine Learning Intern"
                organization="Quantum Research Sciences"
                organizationLink="https://quantumresearchsciences.com/"
                location="West Lafayette, IN"
                range="Sep. 2023 - Aug. 2024"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Deployed ML software for the United States Air Force using statistical
                        and algorithmic techniques
                    </li>
                    <li>
                        Ran Monte Carlo simulations to test and tune quantum algorithms for
                        inventory management
                    </li>
                    <li>
                        Developed an end-user analytics interface for quantum inventory
                        management
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Student Researcher"
                organization="Seoul Science High School"
                location="Seoul, South Korea"
                range="Mar. 2022 - Dec. 2022"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Enhanced real-time landmark tracking via machine-learning techniques
                    </li>
                    <li>
                        Reduced untracked frames in Google MediaPipe by 91.7% with U-Net
                        segmentation
                    </li>
                    <li>
                        Designed a versatile multi-headed software pipeline adaptable to diverse
                        hardware constraints
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Research Assistant"
                organization="Sungkyunkwan University"
                repoLink="https://github.com/looooonk/OSR-Loss-Optimization"
                location="Seoul, South Korea"
                range="May 2021 - Dec. 2021"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Boosted open-set recognition in ResNet models by 9%p through latent
                        space manipulation
                    </li>
                    <li>
                        Built a remote, automated testing/optimization framework in PyTorch
                    </li>
                    <li>
                        Presented findings at the Korean Science High School R&amp;E Conference
                    </li>
                </ul>
            </ExperienceEntry>

            <ExperienceEntry
                title="Student Researcher"
                organization="Seoul Science High School"
                location="Seoul, South Korea"
                range="Apr. 2020 - Jun. 2021"
            >
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        Investigated ad-classification and recommendation using OCR  &amp;
                        clustering
                    </li>
                    <li>
                        Refined k-means to handle temporal dynamics of user interests
                    </li>
                    <li>
                        Demonstrated adaptive behaviour through rigorous temporal testing
                    </li>
                </ul>
            </ExperienceEntry>
        </div>
    );
}
