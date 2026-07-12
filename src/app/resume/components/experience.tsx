import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import type { ReactNode } from "react";
import ResumeEntry, { type EntryLink } from "./resume-entry";
import type { Organization } from "./emblems";

interface ExperienceEntryProps {
    title: string;
    organization: Organization;
    location: string;
    range: string;
    organizationLink?: string;
    repoLink?: string;
    children?: ReactNode;
}

function ExperienceEntry({
    title,
    organization,
    location,
    range,
    organizationLink,
    repoLink,
    children,
}: ExperienceEntryProps) {
    const links: EntryLink[] = [];
    if (organizationLink) {
        links.push({
            href: organizationLink,
            label: `${organization} website`,
            icon: <BiWorld size={14} />,
        });
    }
    if (repoLink) {
        links.push({
            href: repoLink,
            label: `${title} repository`,
            icon: <FaGithub size={16} />,
        });
    }

    return (
        <ResumeEntry
            title={title}
            range={range}
            emblem={organization}
            subtitle={<span className="italic">{organization}</span>}
            subtitleLinks={links}
            location={location}
        >
            {children}
        </ResumeEntry>
    );
}

export default function Experience() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <ExperienceEntry
                title="Artificial Intelligence Researcher"
                organization="Asteromorph"
                organizationLink="https://www.asteromorph.com/"
                location="Seoul, South Korea"
                range="Jun. 2026 - Present"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Working on deploying scalable and efficient reinforcement learning engines for use in agentic systems
                    </li>
                </ul>
            </ExperienceEntry>
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
                </ul>
            </ExperienceEntry>
        </div>
    );
}
