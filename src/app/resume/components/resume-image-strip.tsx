import Image from "next/image";

export interface ResumeItemImage {
    src: string;
    alt: string;
}

interface ResumeImageStripProps {
    images?: ResumeItemImage[];
    showImages?: boolean;
}

export default function ResumeImageStrip({ images, showImages = true }: ResumeImageStripProps) {
    const visibleImages = showImages ? images?.slice(0, 3) ?? [] : [];

    if (visibleImages.length === 0) {
        return null;
    }

    return (
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            {visibleImages.map((image) => (
                <div
                    key={`${image.src}-${image.alt}`}
                    className="relative h-28 flex-1 overflow-hidden rounded-sm border border-border bg-secondary/60 sm:h-32"
                >
                    <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 88vw"
                        className="object-contain p-1 grayscale-[12%]"
                    />
                </div>
            ))}
        </div>
    );
}
