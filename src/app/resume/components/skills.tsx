interface SkillCategoryProps {
    title: string;
    items: string[];
}

function SkillCategory({ title, items }: SkillCategoryProps) {
    return (
        <div className="border-b border-border pb-6">
            <h3 className="font-bold text-foreground mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {[...items].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })).map(item => (
                    <span
                        key={item}
                        className="text-sm px-2.5 py-1 rounded border border-border bg-secondary text-foreground"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="pt-4 space-y-8 mb-20">
            <SkillCategory
                title="Programming Languages & Frameworks"
                items={[
                    "Bash", "C / C++", "Express.js", "Flask", "HTML / CSS", "Java",
                    "JavaScript", "Next.js", "Python", "R", "React", "Rust", "SQL",
                    "Tailwind CSS", "TypeScript", "x86 Assembly (AT&T)",
                ]}
            />
            <SkillCategory
                title="Dev & Research Tools"
                items={[
                    "Conda", "Docker", "Docker Swarm", "Git / GitHub", "Grafana",
                    "IntelliJ", "LaTeX", "MLFlow", "Micromamba", "Overleaf",
                    "Prometheus", "PyCharm", "Slurm", "Tensorboard", "Traefik",
                    "Typst", "UNIX", "VS Code", "Visual Studio", "uv", "W&B",
                ]}
            />
            <SkillCategory
                title="Libraries"
                items={[
                    "HuggingFace", "Keras", "Matplotlib", "NumPy", "OpenAI",
                    "OpenCV", "Pandas", "PyTorch", "PyTorch Lightning", "Ray",
                    "Scikit-learn", "Seaborn", "TensorFlow", "Transformer",
                    "Unsloth", "Verl", "Xformers", "llama.cpp", "trl", "vLLM",
                ]}
            />
            <SkillCategory
                title="Research Topics"
                items={[
                    "Computer Vision", "Diffusion Models",
                    "Distributed & 5D Parallel Training", "Generative AI",
                    "Graph Neural Networks", "Group Neural Networks",
                    "Large Language Models", "Fine-tuning",
                    "Natural Language Processing", "Reinforcement Learning",
                ]}
            />
        </div>
    );
}
