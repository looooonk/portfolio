import type { ReactNode } from "react";
import Image from "next/image";
import IconLink from "@/components/icon-link";
import { emblems, type Organization } from "./emblems";

export interface EntryLink {
    href: string;
    label: string;
    icon: ReactNode;
}

interface ResumeEntryProps {
    title: string;
    range: string;
    emblem?: Organization;
    titleLinks?: EntryLink[];
    subtitle?: ReactNode;
    subtitleLinks?: EntryLink[];
    location?: string;
    children?: ReactNode;
}

function EntryLinks({ links }: { links: EntryLink[] }) {
    return (
        <>
            {links.map(({ href, label, icon }) => (
                <IconLink
                    key={href}
                    href={href}
                    label={label}
                    className="text-muted-foreground hover:text-foreground"
                >
                    {icon}
                </IconLink>
            ))}
        </>
    );
}

/**
 * Shared layout for resume entries: a bold title row with optional icon
 * links and a date range, an optional subtitle/location row, and free-form
 * children below. When `emblem` is given, the entry gains a logo column.
 */
export default function ResumeEntry({
    title,
    range,
    emblem,
    titleLinks,
    subtitle,
    subtitleLinks,
    location,
    children,
}: ResumeEntryProps) {
    const body = (
        <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{title}</h3>
                    {titleLinks && <EntryLinks links={titleLinks} />}
                </div>
                <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{range}</p>
            </div>

            {(subtitle || location) && (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-0.5">
                    <div className="flex items-center gap-2">
                        <p className="text-muted-foreground">{subtitle}</p>
                        {subtitleLinks && <EntryLinks links={subtitleLinks} />}
                    </div>
                    <p className="text-sm italic text-muted-foreground sm:text-right whitespace-nowrap">{location}</p>
                </div>
            )}

            {children && <div className="mt-2 pl-0 sm:pl-4">{children}</div>}
        </div>
    );

    if (!emblem) {
        return <div className="border-b border-border pb-6">{body}</div>;
    }

    return (
        <div className="flex gap-4 border-b border-border pb-6 sm:gap-5">
            <div className="flex-shrink-0 w-10 h-10 relative mt-0.5">
                <Image
                    fill
                    src={emblems[emblem]}
                    alt={`${emblem} logo`}
                    className="object-contain"
                />
            </div>
            {body}
        </div>
    );
}
