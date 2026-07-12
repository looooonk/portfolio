interface SkillCategory {
    title: string;
    items: string[];
}

/** Sorts in place; safe here because each call receives a fresh literal. */
function sorted(items: string[]): string[] {
    return items.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages & Frameworks",
        items: sorted([
            "Bash", "C / C++", "Express.js", "Flask", "HTML / CSS", "Java",
            "JavaScript", "Next.js", "Python", "R", "React", "Rust", "SQL",
            "Tailwind CSS", "TypeScript", "x86 Assembly (AT&T)",
        ]),
    },
    {
        title: "Dev & Research Tools",
        items: sorted([
            "Conda", "Docker", "Docker Swarm", "Git / GitHub", "Grafana",
            "IntelliJ", "LaTeX", "MLflow", "Micromamba", "Overleaf",
            "Prometheus", "PyCharm", "Slurm", "TensorBoard", "Traefik",
            "Typst", "UNIX", "VS Code", "Visual Studio", "uv", "W&B",
        ]),
    },
    {
        title: "Libraries",
        items: sorted([
            "Hugging Face", "Keras", "Matplotlib", "NumPy", "OpenAI",
            "OpenCV", "Pandas", "PyTorch", "PyTorch Lightning", "Ray",
            "Scikit-learn", "Seaborn", "TensorFlow", "Transformers",
            "Unsloth", "verl", "xFormers", "llama.cpp", "trl", "vLLM",
        ]),
    },
    {
        title: "Research Topics",
        items: sorted([
            "Computer Vision", "Diffusion Models",
            "Distributed & 5D Parallel Training", "Generative AI",
            "Graph Neural Networks", "Group Neural Networks",
            "Large Language Models", "Fine-tuning",
            "Natural Language Processing", "Reinforcement Learning",
        ]),
    },
];

function SkillCategorySection({ title, items }: SkillCategory) {
    return (
        <div className="border-b border-border pb-6">
            <h3 className="font-bold text-foreground mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {items.map(item => (
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
            {skillCategories.map(category => (
                <SkillCategorySection key={category.title} {...category} />
            ))}
        </div>
    );
}
