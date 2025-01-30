import { FaGithub } from 'react-icons/fa'

export default function Projects() {
    return (
        <div>
            <div className="space-y-8 pt-4">
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">
                            Spatio-Temporal Predictive Learning with Wavelet-based Attention
                        </h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jul. 2024 ~ Present</p>
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
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">RL Wildfire Optimization</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">May. 2024 ~ Present</p>
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
                            <h3 className="text-lg font-bold">Animal Shogi AI</h3>
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