export default function Skills() {
    return (
        <ul className="list-disc pl-5 pt-4 space-y-6">
            <li>
                <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                    <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                        Programming Languages & Frameworks:
                    </span>
                    <p>
                        Python, C/C++, R, Java, JavaScript, TypeScript, HTML / CSS, Tailwind CSS, x86 Assembly, Bash, React, Flask, Express.js, Next.js
                    </p>
                </div>
            </li>
            <li>
                <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                    <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                        Dev & Research Tools:
                    </span>
                    <p>
                        Git / GitHub, VS Code, Visual Studio, PyCharm, IntelliJ, Slurm, Docker, MLFlow, LaTeX, Overleaf, Typst, UNIX
                    </p>
                </div>
            </li>
            <li>
                <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                    <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                        Libraries:
                    </span>
                    <p>
                        PyTorch, PyTorch Lightning, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, OpenCV
                    </p>
                </div>
            </li>
            <li>
                <div style={{ display: "flex", alignItems: "flex-start" }} className="space-x-1">
                    <span className="font-bold" style={{ whiteSpace: "nowrap" }}>
                        Natural Languages:
                    </span>
                    <p>
                        English & Korean
                    </p>
                </div>
            </li>
        </ul>
    );
}