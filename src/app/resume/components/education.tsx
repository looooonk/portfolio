import Course from "./course";

const emblems: Record<string, string> = {
  "Columbia University": "/emblems/columbia.png",
  "Purdue University": "/emblems/purdue.png",
  "Seoul Science High School": "/emblems/sshs.png",
};

interface EntryProps {
  name: string;
  location: string;
  degreeOrNotes: string;
  range: string;
  children?: React.ReactNode;
}

function EducationEntry({ name, location, degreeOrNotes, range, children }: EntryProps) {
  return (
    <div className="flex space-x-4">
      {/* Emblem container */}
      <div className="flex-shrink-0 w-12 h-12">
        <img
          src={emblems[name]}
          alt={`${name} emblem`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Textual content */}
      <div className="flex-1">
        <div className="flex justify-between items-center space-x-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="h-0.5 flex-grow bg-black" />
          <p className="italic text-right">{location}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>{degreeOrNotes}</p>
          <p className="text-right">{range}</p>
        </div>

        {children && <div className="pl-4">{children}</div>}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div className="pt-4 space-y-12">
      <EducationEntry
        name="Columbia University"
        location="New York, NY"
        degreeOrNotes="B.S. in Computer Science"
        range="Aug. 2025 - May. 2027"
      >
        <div className="space-y-2 pt-2">
          {/* <p className="space-x-8">
            <span className="font-semibold">Overall GPA:</span> 4.00 / 4.00
            <span className="font-semibold">Major GPA:</span> 4.00 / 4.00
          </p> */}
          {/* <div className="flex items-start">
            <span className="font-semibold whitespace-nowrap">
              Relevant Courses:
            </span>
            <div
              className="ml-2 flex-1 max-w-[60%] break-keep"
            >
              <Course name="Probability" code="MA 41600" semester="Took Spring 2024"/>,{" "}
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
          </div> */}
        </div>
      </EducationEntry>

      <EducationEntry
        name="Purdue University"
        location="West Lafayette, IN"
        degreeOrNotes="B.S. in Computer Science, Minor in Mathematics, Machine Intelligence and Algorithmic Foundations Track"
        range="Aug. 2023 - May. 2025"
      >
        <div className="space-y-2 pt-2">
          <p className="space-x-8">
            <span className="font-semibold">Overall GPA:</span> 4.00 / 4.00
            <span className="font-semibold">Major GPA:</span> 4.00 / 4.00
          </p>
          <div className="flex items-start">
            <span className="font-semibold whitespace-nowrap">
              Relevant Courses:
            </span>
            <div
              className="ml-2 flex-1 max-w-[60%] break-keep"
            >
              <Course name="Probability"                              code="MA 41600"      semester="Took Spring 2024"  grade="A+" />, {" "}
              <Course name="Linear Algebra"                           code="MA 26500"      semester="Took Fall 2023"    grade="A+" />, {" "}
              <Course name="Quantum ML Research"                      code="PHYS 49000ZF"  semester="Took Spring 2024"  grade="A+" />, {" "}
              <Course name="Discrete Mathematics"                     code="CS 18200"      semester="Took Spring 2024"  grade="A+" />, {" "}
              <Course name="Programming in C"                         code="CS 24000"      semester="Took Spring 2024"  grade="A+" />, {" "}
              <Course name="Computer Architecture"                    code="CS 25000"      semester="Took Fall 2024"    grade="A+" />, {" "}
              <Course name="Data Structures"                          code="CS 25100"      semester="Took Fall 2024"    grade="A+" />, {" "}
              <Course name="Statistical Methods"                      code="STAT 51100"    semester="Took Fall 2024"    grade="A"  />, {" "}
              <Course name="Competitive Programming I"                code="CS 21100"      semester="Took Spring 2024"  grade="A+" />, {" "}
              <Course name="Competitive Programming II"               code="CS 31100"      semester="Took Fall 2024"    grade="P"  />, {" "}
              <Course name="Foundations of Deep Learning"             code="CS 58700"      semester="Took Spring 2025"  grade="A"  />, {" "}
              <Course name="Data Mining & Machine Learning"           code="CS 37300"      semester="Took Spring 2025"  grade="A"  />, {" "}
              <Course name="Introduction to Artificial Intelligence"  code="CS 47100"      semester="Took Spring 2025"  grade="A+" />
            </div>
          </div>
        </div>
      </EducationEntry>

      <EducationEntry
        name="Seoul Science High School"
        location="Seoul, South Korea"
        degreeOrNotes="32nd Cohort, Granted early admission"
        range="Mar. 2020 - Feb. 2023"
      />
    </div>
  );
}