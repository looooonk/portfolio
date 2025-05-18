import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface CourseProps {
  name: string;
  code: string;
  semester: string;
  grade?: string;
}

export default function Course({ name, code, semester, grade }: CourseProps) {
  const gradeStyles: Record<string, { bg: string; text: string }> = {
    "A+": { bg: "#86efac", text: "#065f46" },
    "A": { bg: "#bbf7d0", text: "#065f46" },
    "P": { bg: "#e5e7eb", text: "#6B7280" },
  };

  const style = grade ? gradeStyles[grade] || { bg: "#e5e7eb", text: "#374151" } : null;

  return (
    <HoverCard openDelay={50} closeDelay={50}>
      <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>{name}</HoverCardTrigger>
      <HoverCardContent
        style={{
          width: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>{code}</div>
          <div>{semester}</div>
        </div>
        {grade && (
          <div
            style={{
              backgroundColor: style?.bg,
              borderRadius: "0.375rem",
              padding: "0.25rem 0.5rem",
              fontWeight: "bold",
              color: style?.text,
              fontSize: "1.1em",
              marginLeft: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {grade}
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}