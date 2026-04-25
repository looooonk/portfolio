import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconLinkProps {
    href: string;
    label: string;
    children: ReactNode;
    className?: string;
}

export default function IconLink({ href, label, children, className }: IconLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={cn("text-foreground hover:text-muted-foreground", className)}
        >
            {children}
        </a>
    );
}
