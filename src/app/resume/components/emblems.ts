/**
 * Single source of truth for organization emblem images in `public/emblems/`.
 * Entry components accept `Organization` so a missing emblem is a compile
 * error rather than a broken image at runtime.
 */
export const emblems = {
    "Asteromorph": "/emblems/asteromorph.jpeg",
    "Columbia University": "/emblems/columbia.png",
    "Microsoft": "/emblems/microsoft.png",
    "Pohang University": "/emblems/postech.png",
    "Purdue University": "/emblems/purdue.png",
    "Quantum Research Sciences": "/emblems/qrs.png",
    "Seoul Science High School": "/emblems/sshs.png",
    "Sungkyunkwan University": "/emblems/skku.png",
} as const;

export type Organization = keyof typeof emblems;
