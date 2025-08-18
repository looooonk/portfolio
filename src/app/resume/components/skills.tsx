export default function Skills() {
    return (
        <div>
            {/* Desktop view */}
            <ul className="list-disc pl-5 pt-4 space-y-12 hidden lg:block">
                <li>
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Programming Languages & Frameworks:
                        </span>
                        <p>
                            Bash, C / C++, Express.js, Flask, HTML / CSS, Java, JavaScript, Next.js, Python, R, React, Rust, SQL, Tailwind CSS, TypeScript, x86 Assembly (AT&T)
                        </p>
                    </div>
                </li>
                <li>
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Dev & Research Tools:
                        </span>
                        <p>
                            Conda, Docker, Docker Swarm, Git / GitHub, Grafana, IntelliJ, LaTeX, MLFlow, Micromamba, Overleaf, Prometheus, PyCharm, Slurm, Tensorboard, Traefik, Typst, UNIX, VS Code, Visual Studio, uv
                        </p>
                    </div>
                </li>
                <li>
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Libraries:
                        </span>
                        <p>
                            HuggingFace, Keras, Matplotlib, NumPy, OpenAI, OpenCV, Pandas, PyTorch, PyTorch Lightning, Ray, Scikit-learn, Seaborn, TensorFlow, Transformer, Unsloth, Xformers, llama.cpp, trl, vLLM
                        </p>
                    </div>
                </li>
                <li>
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Research Topics:
                        </span>
                        <p>
                            Computer Vision, Diffusion Models, Distributed & 5D Parallel Training, Generative AI, Graph Neural Networks, Invariance, LLM Fine-tuning, Large Language Models, Natural Language Processing, Reinforcement Learning
                        </p>
                    </div>
                </li>
            </ul>
            {/* Mobile view */}
            <ul className="lg:hidden list-disc pl-5 pt-4 space-y-12">
                <li className="space-y-2">
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <p className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Programming Languages & Frameworks:
                        </p>
                    </div>
                    <p>
                        Python, C/C++, R, Java, JavaScript, TypeScript, HTML / CSS, Tailwind CSS, x86 Assembly, Bash, React, Flask, Express.js, Next.js, SQL
                    </p>
                </li>
                <li className="space-y-2">
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <p className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Dev & Research Tools:
                        </p>
                    </div>
                    <p>
                        Git / GitHub, VS Code, Visual Studio, PyCharm, IntelliJ, Slurm, Docker, MLFlow, LaTeX, Overleaf, Typst, UNIX
                    </p>
                </li>
                <li className="space-y-2">
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <p className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Research Topics:
                        </p>
                    </div>
                    <p>
                        Natural Language Processing, Computer Vision, Reinforcement Learning, Generative AI, Large Language Models, LLM Fine Tuning, Invariance, Diffusion Models
                    </p>
                </li>
                <li className="space-y-2">
                    <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                        <p className="font-bold" style={{ whiteSpace: "nowrap" }}>
                            Libraries:
                        </p>
                    </div>
                    <p>
                        PyTorch, PyTorch Lightning, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, OpenCV, Transformer, Unsloth, Xformers, HuggingFace, OpenAI, llama.cpp, vLLM, trl
                    </p>
                </li>
            </ul>
        </div>
    );
}
