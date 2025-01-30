import Course from "./course";

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
              B.S. in Computer Science, Minor in Mathematics, Machine Intelligence and Algorithmic Foundations Track
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
                <Course name="Probability" code="MA 41600" semester="Took Spring 2024" />,{" "}
                <Course name="Linear Algebra" code="MA 26500" semester="Took Fall 2023" />,{" "}
                <Course name="Quantum ML Research" code="PHYS 49000ZF" semester="Took Spring 2024" />,{" "}
                <Course name="Discrete Mathematics" code="CS 18200" semester="Took Spring 2024" />,{" "}
                <Course name="Programming in C" code="CS 24000" semester="Took Spring 2024" />,{" "}
                <Course name="Computer Architecture" code="CS 25000" semester="Took Fall 2024" />,{" "}
                <Course name="Data Structures" code="CS 25100" semester="Took Fall 2024" />,{" "}
                <Course name="Statistical Methods" code="STAT 51100" semester="Took Fall 2024" />,{" "}
                <Course name="Competitive Programming I" code="CS 21100" semester="Took Spring 2024" />,{" "}
                <Course name="Competitive Programming II" code="CS 31100" semester="Took Fall 2024" />,{" "}
                <Course name="Foundations of Deep Learning" code="CS 58700" semester="Taking Spring 2025" />,{" "}
                <Course name="Data Mining & Machine Learning" code="CS 37300" semester="Taking Spring 2025" />,{" "}
                <Course name="Introduction to Artificial Intelligence" code="CS 47100" semester="Taking Spring 2025" />
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
