import type { ReactNode } from "react";

const emblems: Record<string, string> = {
  "Purdue University":      "/emblems/purdue.png",
  "Microsoft":              "/emblems/microsoft.png",
  "Pohang University": "/emblems/postech.png",
  "Seoul Science High School": "/emblems/sshs.png",
};

interface AwardEntryProps {
  name: string;
  title: string;
  issuer: string;
  year: string;
  children?: ReactNode;
}

function AwardEntry({ name, title, issuer, year, children }: AwardEntryProps) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 w-12 h-12">
        <img
          src={emblems[name]}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center space-x-2">
          <p className="font-bold">{title}</p>
          <div className="h-0.5 flex-grow bg-black" />
          <p className="text-right">{issuer}, {year}</p>
        </div>

        {children && <p className="mt-1">{children}</p>}
      </div>
    </div>
  );
}

/* ---------- 4.  Data ---------------------------------------------------- */
const awards = [
  {
    name: "Purdue University",
    title: "Purdue Office of Undergraduate Research Grant",
    issuer: "Purdue University",
    year: "2024",
    description:
      <>Received $500 from the OUR for project&nbsp;
        <span className="italic">WUMT: Wavelet U-Net Motion Transformer</span>.
      </>,
  },
  {
    name: "Purdue University",
    title: "Dean's List & Semester Honors",
    issuer: "Purdue University",
    year: "2023 - 2024",
    description:
      "Earned both Dean's List and Semester Honors in Fall 2023, Spring 2024, and Fall 2024.",
  },
  {
    name: "Pohang University",
    title: "Excellence Award for the Gifted School Research Conference",
    issuer: "Pohang University of Science & Technology",
    year: "2022",
    description:
      "Recognized for a presentation on open-set recognition with ResNet models.",
  },
  {
    name: "Seoul Science High School",
    title: "Top Award for R&E Research in Computer Science",
    issuer: "Seoul Science High School",
    year: "2022",
    description:
      "Improved open-set recognition accuracy in ResNet models.",
  },
  {
    name: "Microsoft",
    title: "Azure AI Fundamentals Certification",
    issuer: "Microsoft",
    year: "2022",
    description:
      "Achieved AZ-900 certification on AI and Microsoft Azure fundamentals.",
  },
  {
    name: "Seoul Science High School",
    title: "Top Award for Independent Research in Computer Science",
    issuer: "Seoul Science High School",
    year: "2021",
    description:
      "Developed advertisement classification using OCR and semantic tree matching.",
  },
] as const;

export default function Awards() {
  return (
    <div className="pt-4 space-y-8">
      {awards.map(a => (
        <AwardEntry
          name={a.name}
          key={a.title}
          title={a.title}
          issuer={a.issuer}
          year={a.year}
        >
          {a.description}
        </AwardEntry>
      ))}
    </div>
  );
}
