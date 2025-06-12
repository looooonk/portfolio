import { FaGithub } from 'react-icons/fa'

export default function Activities() {
    return (
        <div>
            <div className="space-y-12 pt-4">
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Purdue Hackers Member</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Jan. 2025 ~ Present</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Purdue University</p>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Participated in weekly &apos;hack&apos; sessions and developed projects involving full-stack web development
                        </li>
                        <li>
                            Developing website for course scheduling at Purdue with Next.js, MongoDB, and Python among team of 3
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">ICPC 2023 ECNA Regional Participant</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Sep. 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Purdue University</p>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Ranked in the Top 20 in Purdue&apos;s ICPC participant selection contest
                        </li>
                        <li>
                            Led team of 3 in the ICPC East Central North America regional contest among 5 other Purdue ICPC teams
                        </li>
                        <li>
                            Solved problems utilizing competitive programming techniques such as dynamic programming and backtracking
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">Hello World Hackathon Participant</h3>
                            <a
                                href="https://github.com/looooonk/Health-App"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-800"
                            >
                                <FaGithub className="text-left" size={20} />
                            </a>
                        </div>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Sep. 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Purdue University</p>
                        <p className="italic text-right">West Lafayette, IN</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Led a team of 4 in a 24-hour hackathon driving project development and collaboration
                        </li>
                        <li>
                            Built a software pipeline utilizing LLMs to deliver personalized dietary text feedback to users
                        </li>
                        <li>
                            Built a full-stack web app with a React front-end and ExpressJS back-end integrating MongoDB RestAPIs
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Published Author on Neural Network Fundamentals</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Sep. 2021 ~ Mar. 2022</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Barun Books Co., Ltd</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Authored a 160-page book on neural networks covering backpropagation, gradient descent, and parallelization
                        </li>
                        <li>
                            Distributed to 13 retailers, selling 300+ copies in the first year
                        </li>
                        <li>
                            Ranked as a top 4 entry in the “Weekly Top Releases” by the second-largest South Korean book retailer
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Artificial Intelligence Lecturer</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">May 2021 ~ Apr. 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Seoul Science High School</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Presented 8 deep learning-focused lectures to an audience of 200+ students and faculty
                        </li>
                        <li>
                            Delivered lectures on topics including linear algebra, conventional neural networks, and transformers
                        </li>
                        <li>
                            Conducted 10 additional interdisciplinary volunteer lectures focused on mathematics and artificial intelligence
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center space-x-2">
                        <h3 className="text-lg font-bold">Artificial Intelligence Club President</h3>
                        <div className="h-0.5 flex-grow bg-black"></div>
                        <p className="text-right">Mar. 2021 ~ Feb. 2023</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="italic">Seoul Science High School</p>
                        <p className="italic text-right">Seoul, South Korea</p>
                    </div>
                    <ul className="list-disc pl-5">
                        <li>
                            Authored 4 different entry exams on mathematical deep learning and essays on model selection
                        </li>
                        <li>
                            Curated literature and project content with paper readings and specialized datasets
                        </li>
                        <li>
                            Supervised and managed the acquisition of a multi-GPU deep learning server for club research and projects
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}