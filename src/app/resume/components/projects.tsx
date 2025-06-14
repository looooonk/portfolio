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
        <div className="flex space-x-4 p-6 border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-lg hover:scale-[102%] transition-all duration-300 hover:bg-gray-50">
            {/* Textual content */}
            <div className="flex-1">
                <div className="flex justify-between items-center space-x-2">
                    <h3 className="text-lg font-bold">{name}</h3>
                    {link && icon && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-800"
                        >
                            {icon}
                        </a>
                    )}
                    <div className="h-0.5 flex-grow bg-black" />
                    <p className="text-right">{range}</p>
                </div>

                {children && <div className="pl-4">{children}</div>}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <div className="pt-4 space-y-12 mb-20">
                <ProjectEntry
                    name="Rotationally Equivariant Spatio-temporal Prediction"
                    range="Feb. 2025 ~ Apr. 2025"
                >
                    <ul className="list-disc pl-5">
                        <li>
                            Developed spatio-temporal predictive models with rotational equivariance to improve real-world performance and adapt to out-of-distribution inputs
                        </li>
                        <li>
                            Developed training infrastructure using PyTorch Lightning and distributed high-performance computing nodes
                        </li>
                        <li>
                            Compared multiple methods of injecting rotational equivariance using steerable wavelet filters, group equivariance CNNs, and equivariant self-attention modules
                        </li>
                        <li>
                            Improved baseline spatio-temporal predictive models with out-of-distribution input in both synthetic and out-in-the-wild datasets
                        </li>
                    </ul>
                </ProjectEntry>
                <ProjectEntry
                    name="Fractel"
                    range="Jan. 2025 ~ Present"
                >
                    <ul className="list-disc pl-5">
                        <li>
                            Developing course selection website for Purdue students supporting multiple time sheets and prerequisite tree viewing
                        </li>
                        <li>
                            Developed website front-end UI with Next.js, TypeScript, and Tailwind CSS and course catalog scraper with Python
                        </li>
                        <li>
                            Theorized implementing back-end support with MongoDB and RestAPI calls for dynamic course catalog maintenance
                        </li>
                    </ul>
                </ProjectEntry>
                <ProjectEntry
                    name="Financial Anomaly Detection with Modified Benford&apos;s Law"
                    range="Jan. 2025 ~ Present"
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
                    range="Jul. 2024 ~ Mar. 2025"
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
                    range="May. 2024 ~ Dec. 2024"
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
                    range="Feb. 2023 ~ Aug. 2023"
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
                    range="Mar. 2021 ~ Nov. 2021"
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