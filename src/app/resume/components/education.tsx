import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Education() {
  return (
    <div>
      <div className="pt-4 space-y-8">
        <div>
          <div className="flex justify-between items-center space-x-2">
            <h3 className="text-lg font-bold">Purdue University</h3>
            <div className="h-0.5 flex-grow bg-black"></div>
            <p className="italic text-right">West Lafayette, IN</p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              B.S. in Computer Science, Minor in Mathematics, Machine
              Intelligence Track
            </p>
            <p className="text-right">Aug. 2023 ~ Present</p>
          </div>
          <div className="space-y-2 pt-2">
            <p className="space-x-8">
              <span className="font-semibold">Overall GPA:</span> 4.00 / 4.00
              <span className="font-semibold">Major GPA:</span> 4.00 / 4.00
            </p>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span className="font-semibold" style={{ whiteSpace: "nowrap" }}>
                Relevant Courses:
              </span>
              <div
                style={{
                  marginLeft: "10px",
                  flex: 1,
                  maxWidth: "60%",
                  wordBreak: "keep-all",
                  overflowWrap: "break-word",
                }}
              >
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Probability</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>MA 41600</div>
                    Took Spring 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Linear Algebra</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>MA 26500</div>
                    Took Fall 2023
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Quantum ML Research</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>PHYS 49000ZF</div>
                    Took Spring 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Discrete Mathematics</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 18200</div>
                    Took Spring 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Programming in C</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 24000</div>
                    Took Spring 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Computer Architecture</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 25000</div>
                    Took Fall 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Data Structures</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 25100</div>
                    Took Fall 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Statistical Methods</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>STAT 51100</div>
                    Took Fall 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>Competitive Programming I</HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 21100</div>
                    Took Spring 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>
                    Competitive Programming II
                  </HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 31100</div>
                    Took Fall 2024
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>
                    Foundations of Deep Learning
                  </HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 58700</div>
                    Taking Spring 2025
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>
                    Data Mining & Machine Learning
                  </HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 37300</div>
                    Taking Spring 2025
                  </HoverCardContent>
                </HoverCard>
                ,{" "}
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>
                    Introduction to Artificial Intelligence
                  </HoverCardTrigger>
                  <HoverCardContent style={{ width: "auto" }}>
                    <div style={{ fontWeight: "bold" }}>CS 47100</div>
                    Taking Spring 2025
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center space-x-2">
            <h3 className="text-lg font-bold">Seoul Science High School</h3>
            <div className="h-0.5 flex-grow bg-black"></div>
            <p className="italic text-right">Seoul, South Korea</p>
          </div>
          <div className="flex justify-between items-center">
            <p>32nd Cohort, Granted early admission</p>
            <p className="text-right">Mar. 2020 ~ Feb. 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
