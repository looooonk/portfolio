import type { ReactNode } from "react";
import { FaGithub } from 'react-icons/fa'
import IconLink from "@/components/icon-link";

interface ProjectEntryProps {
    name: string;
    range: string;
    link?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

function ProjectEntry({ name, range, link, icon, children }: ProjectEntryProps) {
    return (
        <div className="border-b border-border pb-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    {link && icon && (
                        <IconLink
                            href={link}
                            label={`${name} repository`}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {icon}
                        </IconLink>
                    )}
                </div>
                <p className="text-sm italic text-muted-foreground whitespace-nowrap">{range}</p>
            </div>

            {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
        </div>
    );
}

export default function Projects() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <ProjectEntry
                name="jsonl-viewer"
                range="Jan. 2026 - Apr. 2026"
                link="https://github.com/looooonk/jsonl-viewer"
                icon={<FaGithub size={16} />}
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed CLI-based JSON lines (.jsonl) file analyzer using Python and curses for MacOS and Linux systems
                    </li>
                    <li>
                        Implemented vim-like structure for in-program command analysis and execution along with custom colored themes
                    </li>
                    <li>
                        Made available for download via source compilation and homebrew taps
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
                        Constructed parallel fine-tuning orchastrator using Ray, Grafana, Prometheus, and Docker
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
                        Improved baseline spatio-temporal predictive models with out-of-distribution input in both synthetic and out-in-the-wild datasets
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Fractel"
                range="Jan. 2025 - May 2025"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Developed course selection website for Purdue students supporting multiple time sheets and prerequisite tree viewing
                    </li>
                    <li>
                        Designed website front-end UI with Next.js, TypeScript, and Tailwind CSS and course catalog scraper with Python
                    </li>
                    <li>
                        Theorized implementing back-end support with MongoDB and RestAPI calls for dynamic course catalog maintenance
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Financial Anomaly Detection with Modified Benford&apos;s Law"
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
                name="WUMT : Wavelet U-Net Motion Transformer"
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
                name="RL Wildfire Optimization"
                range="May 2024 - Dec. 2024"
            >
                <ul className="list-disc pl-5">
                    <li>
                        Utilized Convolutional DQN models to optimize firefighting efforts and evacuation routes with wildfires
                    </li>
                    <li>
                        Developed complex wildfire simulation incorporating population density, terrain, weather, and crowd dynamics
                    </li>
                    <li>
                        Theorized dynamic custom action and state space utilizing one-hot encoding and action masks
                    </li>
                </ul>
            </ProjectEntry>
            <ProjectEntry
                name="Contextual-Diffusion"
                range="Feb. 2023 - Aug. 2023"
                link="https://github.com/looooonk/GPT4-Contextual-Diffusion"
                icon={<FaGithub size={16} />}
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
            <ProjectEntry
                name="Minimax-based Animal Shogi AI"
                range="Mar. 2021 - Nov. 2021"
                link="https://github.com/looooonk/Animal-Shogi-Bot"
                icon={<FaGithub size={16} />}
            >
                <ul className="list-disc pl-5">
                    <li>
                        Programmed an Animal Shogi bot using a minimax algorithm with alpha-beta pruning in C++
                    </li>
                    <li>
                        Implemented interactable game GUI and cross-language translation mechanism with Python
                    </li>
                    <li>
                        Demonstrated bot with live play-testing at school festival to 350+ students and faculty
                    </li>
                </ul>
            </ProjectEntry>
        </div>
    );
}
