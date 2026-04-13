import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface CourseProps {
    name: string;
    code: string;
    semester: string;
    grade?: string;
}

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
                        <div className="text-lg font-semibold text-foreground">
                            {grade}
                        </div>
                    )}
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
