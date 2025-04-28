import { FaGithub } from 'react-icons/fa'
import { BiWorld } from "react-icons/bi";

export default function Experience() {
    return (
        <div>
            <div className="space-y-8 pt-4">
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Artificial Intelligence Engineering Intern</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">May. 2025 ~ Aug. 2025</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <p className="italic">Asteromorph</p>
                            <a
                                href="https://www.asteromorph.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <BiWorld className="text-left" size={15} />
                            </a>
                        </div>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Incoming intern for Summer 2025
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Undergraduate Teaching Assistant</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jan. 2025 ~ Present</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic">Purdue University</p>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Currently working as a UTA for CS 18200 (Discrete Mathematics) and CS 24000 (Programming in C)
                        </li>
                        <li>
                            Held office hours, lab sessions, and graded student assignments
                        </li>
                        <li>
                            Reviewed and conducted problem solving sessions for discrete mathematics on first order logic, set theory, etc.
                        </li>
                        <li>
                            Answered students&apos; questions during lab sessions on UNIX systems, file IO, dynamic memory allocation, etc.
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Undergraduate Research Assistant</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jan. 2024 ~ Dec. 2024</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic">Purdue University</p>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Engineered demand forecasting pipeline integrating probability curves with LSTM encoding for enhanced accuracy
                        </li>
                        <li>
                            Optimized inference storage by achieving a reduction of &gt;99% compared to traditional deep learning models
                        </li>
                        <li>
                            Conducted latent space analysis and illustrated composite encoding of demand features using LSTM models
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Machine Learning Engineer</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Sep. 2023 ~ Aug. 2024</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <p className="italic">Quantum Research Sciences</p>
                            <a
                                href="https://quantumresearchsciences.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <BiWorld className="text-left" size={15} />
                            </a>
                        </div>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Employed ML algorithms and statistical techniques to deploy software for the United States Air Force
                        </li>
                        <li>
                            Produced Monte Carlo simulations to test and tune quantum algorithms for inventory management
                        </li>
                        <li>
                            Developed end-user interface for data analytics in quantum inventory management software
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Student Researcher</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Mar. 2022 ~ Dec. 2022</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic">Seoul Science High School</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Explored enhancements in real-time landmark tracking algorithms using machine and deep learning
                        </li>
                        <li>
                            Improved Google MediaPipe performance by reducing untracked frames by 91.7% through U-Net segmentation
                        </li>
                        <li>
                            Designed a versatile multi-headed software solution adaptable to various hardware specifications
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Research Assistant</h3>
                            <a
                                href="https://github.com/looooonk/OSR-Loss-Optimization"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaGithub className="text-left" size={20} />
                            </a>
                        </div>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">May 2021 ~ Dec. 2021</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic">Sungkyunkwan University</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Engaged with research team to boost open set recognition in ResNet models by 9%p via latent space manipulation
                        </li>
                        <li>
                            Developed and deployed a remote automated testing and optimization framework for models using PyTorch
                        </li>
                        <li>
                            Presented research findings at the Korean Science High School R&E Conference
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Student Researcher</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Apr. 2020 ~ Jun. 2021</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="italic">Seoul Science High School</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>

                    <ul className="list-disc pl-5">
                        <li>
                            Investigated topics on advertisement classification and recommendation using OCR and clustering algorithms
                        </li>
                        <li>
                            Refined k-means clustering to enhance classification accuracy, adapting to the temporal dynamics of user interests
                        </li>
                        <li>
                            Demonstrated algorithm adaptability to temporal features through rigorous testing and analysis
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}