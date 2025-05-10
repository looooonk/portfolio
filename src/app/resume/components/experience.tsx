// experience.tsx
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import React from "react";

const logos: Record<string, string> = {
  "Asteromorph": "/emblems/asteromorph.jpeg",
  "Purdue University": "/emblems/purdue.png",
  "Quantum Research Sciences": "/emblems/qrs.png",
  "Seoul Science High School": "/emblems/sshs.png",
  "Sungkyunkwan University": "/emblems/skku.png",
};

interface ExperienceEntryProps {
  title: string;
  organization: string;
  location: string;
  range: string;
  organizationLink?: string;
  repoLink?: string;
  children?: React.ReactNode;
}

function ExperienceEntry({
  title,
  organization,
  location,
  range,
  organizationLink,
  repoLink,
  children,
}: ExperienceEntryProps) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 w-12 h-12">
        <img
          src={logos[organization]}
          alt={`${organization} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center space-x-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="h-0.5 flex-grow bg-black" />
          <p className="text-right">{range}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <p className="italic">{organization}</p>
            {organizationLink && (
              <a
                href={organizationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <BiWorld size={15} />
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <FaGithub size={18} />
              </a>
            )}
          </div>
          <p className="italic text-right">{location}</p>
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="pt-4 space-y-8">
      <ExperienceEntry
        title="Artificial Intelligence Engineering Intern"
        organization="Asteromorph"
        organizationLink="https://www.asteromorph.com/"
        location="Seoul, South Korea"
        range="May. 2025 - Present"
      >
        <ul className="list-disc pl-5">
          <li>Incoming intern for Summer 2025</li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Undergraduate Teaching Assistant"
        organization="Purdue University"
        location="West Lafayette, IN"
        range="Jan. 2025 - May 2025"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            UTA for&nbsp;CS 18200 (Discrete Mathematics), CS 18200H (Honors Discrete Mathematics) and CS 24000 (Programming
            in C)
          </li>
          <li>Held office hours, lab sessions, and graded assignments</li>
          <li>
            Ran problem-solving sessions on first-order logic, set theory, etc.
          </li>
          <li>
            Assisted students with UNIX, file I/O, dynamic memory allocation,
            and more
          </li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Undergraduate Research Assistant"
        organization="Purdue University"
        location="West Lafayette, IN"
        range="Jan. 2024 - Dec. 2024"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Built a demand-forecasting pipeline that merges probability curves
            with an LSTM encoder
          </li>
          <li>Cut inference storage &gt;99% relative to conventional DL models</li>
          <li>
            Performed latent-space analysis to visualize composite encodings of
            demand features
          </li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Machine Learning Engineer"
        organization="Quantum Research Sciences"
        organizationLink="https://quantumresearchsciences.com/"
        location="West Lafayette, IN"
        range="Sep. 2023 - Aug. 2024"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Deployed ML software for the United States Air Force using statistical
            and algorithmic techniques
          </li>
          <li>
            Ran Monte Carlo simulations to test and tune quantum algorithms for
            inventory management
          </li>
          <li>
            Developed an end-user analytics interface for quantum inventory
            management
          </li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Student Researcher"
        organization="Seoul Science High School"
        location="Seoul, South Korea"
        range="Mar. 2022 - Dec. 2022"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Enhanced real-time landmark tracking via machine-learning techniques
          </li>
          <li>
            Reduced untracked frames in Google MediaPipe by 91.7% with U-Net
            segmentation
          </li>
          <li>
            Designed a versatile multi-headed software pipeline adaptable to diverse
            hardware constraints
          </li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Research Assistant"
        organization="Sungkyunkwan University"
        repoLink="https://github.com/looooonk/OSR-Loss-Optimization"
        location="Seoul, South Korea"
        range="May 2021 - Dec. 2021"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Boosted open-set recognition in ResNet models by 9%p through latent
            space manipulation
          </li>
          <li>
            Built a remote, automated testing/optimization framework in PyTorch
          </li>
          <li>
            Presented findings at the Korean Science High School R&amp;E Conference
          </li>
        </ul>
      </ExperienceEntry>

      <ExperienceEntry
        title="Student Researcher"
        organization="Seoul Science High School"
        location="Seoul, South Korea"
        range="Apr. 2020 - Jun. 2021"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Investigated ad-classification and recommendation using OCR  &amp;
            clustering
          </li>
          <li>
            Refined k-means to handle temporal dynamics of user interests
          </li>
          <li>
            Demonstrated adaptive behaviour through rigorous temporal testing
          </li>
        </ul>
      </ExperienceEntry>
    </div>
  );
}
