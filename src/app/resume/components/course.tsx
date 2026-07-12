import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface CourseProps {
    name: string;
    code: string;
    semester: string;
    grade?: string;
}

const gradeColors: Record<string, string> = {
    "A+": "bg-green-700/15 text-green-800 dark:bg-green-400/15 dark:text-green-200",
    "A": "bg-green-500/15 text-green-700 dark:bg-green-300/15 dark:text-green-100",
    "P": "bg-zinc-500/10 text-zinc-600 dark:bg-zinc-400/10 dark:text-zinc-300",
};

export default function Course({ name, code, semester, grade }: CourseProps) {
    return (
        <HoverCard openDelay={50} closeDelay={50}>
            <HoverCardTrigger className="cursor-default whitespace-nowrap">
                {name}
            </HoverCardTrigger>
            <HoverCardContent className="w-auto text-sm">
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <div className="font-semibold">{code}</div>
                        <div className="text-muted-foreground">{semester}</div>
                    </div>
                    {grade && (
                        <div
                            className={cn(
                                "rounded-xl px-2.5 py-1.5 text-lg font-semibold leading-none",
                                gradeColors[grade] ?? "bg-muted text-foreground",
                            )}
                        >
                            {grade}
                        </div>
                    )}
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
