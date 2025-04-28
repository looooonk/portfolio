import { FaGithub } from 'react-icons/fa'

export default function Projects() {
    return (
        <div>
            <div className="space-y-8 pt-4">
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">
                            Rotationally Equivariant Spatio-temporal Prediction
                        </h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Feb. 2025 ~ Apr. 2025</p>
                    </div>

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
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">
                            Fractel
                        </h3>
                        <a
                            href="https://github.com/looooonk/fractel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-800"
                        >
                            <FaGithub className="text-left" size={20} />
                        </a>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jan. 2025 ~ Present</p>
                    </div>

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
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">
                            Financial Anomaly Detection with Modified Benford&apos;s Law
                        </h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jan. 2025 ~ Present</p>
                    </div>

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
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">
                            WUMT : Wavelet U-Net Motion Transformer
                        </h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jul. 2024 ~ Mar. 2025</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Investigated spatio-temporal encoding methods of videos using discrete wavelet transforms and NAFNet blocks
                        </li>
                        <li>
                            Utilized 4D motion tensor computations and predictions with transformers for U-Net latent space operations
                        </li>
                        <li>
                            Built training infrastructure with PyTorch Lightning and leveraged Docker and MLFlow for streamlined research
                        </li>
                        <li>
                            Recieved $500 research grant from Purdue&apos;s Office of Undergraduate Research
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">RL Wildfire Optimization</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">May. 2024 ~ Dec. 2024</p>
                    </div>

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
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Contextual-Diffusion</h3>
                            <a
                                href="https://github.com/looooonk/GPT4-Contextual-Diffusion"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaGithub className="text-left" size={20} />
                            </a>
                        </div>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Feb. 2023 ~ Aug. 2023</p>
                    </div>

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
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Minimax-based Animal Shogi AI</h3>
                            <a
                                href="https://github.com/looooonk/Animal-Shogi-Bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaGithub className="text-left" size={20} />
                            </a>
                        </div>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Mar. 2021 ~ Nov. 2021</p>
                    </div>

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
                </div>
            </div>
        </div>
    );
}