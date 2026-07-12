import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import ResumeEntry, { type EntryLink } from "./resume-entry";

interface ProjectEntryProps {
    name: string;
    range: string;
    repoLink?: string;
    siteLink?: string;
    children?: ReactNode;
}

function ProjectEntry({ name, range, repoLink, siteLink, children }: ProjectEntryProps) {
    const links: EntryLink[] = [];
    if (repoLink) {
        links.push({
            href: repoLink,
            label: `${name} repository`,
            icon: <FaGithub size={16} />,
        });
    }
    if (siteLink) {
        links.push({
            href: siteLink,
            label: `${name} website`,
            icon: <BiWorld size={14} />,
        });
    }

    return (
        <ResumeEntry title={name} range={range} titleLinks={links}>
            {children}
        </ResumeEntry>
    );
}

export default function Projects() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <ProjectEntry
                name="Graduate School Research Agent"
                range="Apr. 2026 - Present"
                repoLink="https://github.com/looooonk/graduate-school-agent"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed agentic system to research graduate school programs, including fitness, quality, and difficulty
                    </li>
                    <li>
                        Implemented agentic retrieval loop, LLM quality judging, CV-aware fit assessment, and gap-fill passes using the Anthropic SDK
                    </li>
                    <li>
                        Added rich reporting using markdown files, full trajectory viewing and analysis, and interactive UIs
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Factorio Tech Tree"
                range="Feb. 2026 - Present"
                repoLink="https://github.com/looooonk/factorio-tech-tree/"
                siteLink="https://factorio-tech-tree.com/"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed an interactive technology tree viewer for the game Factorio, along with a crawler to automatically collect relevant data from wiki pages
                    </li>
                    <li>
                        Utilized dynamic tree structuring and full child search features using graph distance algorithms in TypeScript
                    </li>
                    <li>
                        Deployed website using Vercel with production optimization for faster image rendering and tree processing
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="CLI JSONL Viewer"
                range="Jan. 2026 - Present"
                repoLink="https://github.com/looooonk/jsonl-viewer"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed CLI-based JSON lines (.jsonl) file analyzer using Python and curses for macOS and Linux systems
                    </li>
                    <li>
                        Implemented vim-like structure for in-program command analysis and execution along with custom colored themes
                    </li>
                    <li>
                        Made available for download via source compilation and Homebrew taps
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Stack Rotation"
                range="May 2025 - Aug. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed full-rank fine-tuning LoRA methodology with PyTorch and Unsloth using stochastically sampled rotation matrices
                    </li>
                    <li>
                        Achieved SOTA-comparable performance when compared to LoRA variants such as DoRA, VeRA, and HiRA
                    </li>
                    <li>
                        Constructed parallel fine-tuning orchestrator using Ray, Grafana, Prometheus, and Docker
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Rotationally Equivariant Spatio-temporal Prediction"
                range="Feb. 2025 - Apr. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed spatio-temporal predictive models with rotational equivariance to improve real-world performance and adapt to out-of-distribution inputs
                    </li>
                    <li>
                        Composed training infrastructure using PyTorch Lightning and distributed high-performance computing nodes
                    </li>
                    <li>
                        Compared multiple methods of injecting rotational equivariance using steerable wavelet filters, group equivariance CNNs, and equivariant attention modules
                    </li>
                    <li>
                        Improved baseline spatio-temporal predictive models with out-of-distribution input in both synthetic and in-the-wild datasets
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Financial Anomaly Detection with Modified Benford's Law"
                range="Jan. 2025 - Mar. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Suggested novel alteration of Benford&apos;s Law applicable to stock return data based on the Student-L&eacute;vy process
                    </li>
                    <li>
                        Proved algorithm utility with real-life stock data and demonstrated 60% improvement over conventional methods
                    </li>
                    <li>
                        Utilized new algorithm to detect financial anomalies in stock return data based on information from fitted location-scale t-distributions
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="WUMT: Wavelet U-Net Motion Transformer"
                range="Jul. 2024 - Mar. 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed a novel motion prediction model utilizing wavelet U-Net and transformer architecture
                    </li>
                    <li>
                        Improved motion prediction accuracy by 20% over baseline models in synthetic datasets
                    </li>
                    <li>
                        Theorized and implemented a novel training pipeline with multi-scale wavelet decomposition and attention mechanisms
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Contextual-Diffusion"
                range="Feb. 2023 - Aug. 2023"
                repoLink="https://github.com/looooonk/GPT4-Contextual-Diffusion"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Improved cohesion and features of Stable Diffusion model output utilizing spatial context from LLMs
                    </li>
                    <li>
                        Developed pipeline incorporating Mask-RCNN models as translation layers between LLMs and Stable Diffusion
                    </li>
                    <li>
                        Generated and annotated image segmentation datasets for supervised learning of Mask-RCNN models
                    </li>
                </ul>
            </ProjectEntry>
        </div>
    );
}
