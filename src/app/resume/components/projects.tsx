import { FaGithub } from 'react-icons/fa'

interface ProjectEntryProps {
    name: string;
    range: string;
    link?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

function ProjectEntry({ name, range, link, icon, children }: ProjectEntryProps) {
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
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 lg:whitespace-nowrap min-w-0 flex-1 break-words">{name}</h3>
                        {link && icon && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
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
                    <p className="italic text-left text-gray-700 dark:text-gray-200 sm:text-right lg:whitespace-nowrap sm:shrink-0">{range}</p>
                </div>

                {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <div className="pt-4 space-y-12 mb-20">
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
                            Suggested novel alteration of Benford&apos;s Law applicable to stock return data based on the Student-Lévy process
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
                    icon={<FaGithub className="text-left" size={20} />}
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
                    icon={<FaGithub className="text-left" size={20} />}
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
        </div>
    );
}
