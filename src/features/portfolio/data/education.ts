import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "UNIKOM",
    school: "Universitas Komputer Indonesia - UNIKOM",
    degree: "Bachelor's degree",
    fieldOfStudy: "Information Systems",
    period: {
      start: "10.2022",
      end: "09.2026",
    },
    description: `- Completed a Bachelor’s degree in Information Systems.
- Language Proficiency: Achieved a total Score Of 400 on the Institutional English Proficiency Test (IEPT).
- Indonesian Professional Certification Authority (BNSP) – LSP Informatika Associate Data Analyst.`,
    skills: [
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "Laravel",
      "React.js",
      "Tailwind CSS",
      "Jira",
      "MySQL",
      "Test Planning",
      "Test Design",
      "Test Scenario & Test Case",
      "Test Execution",
      "Manual Testing",
      "Software Quality Assurance",
      "Jira",
    ],
  },
  {
    id: "2 Padalarang",
    school: "State Senior High School 2 Padalarang",
    fieldOfStudy: "Social Sciences Major",
    period: {
      start: "07.2019",
      end: "05.2022",
    },
  },
  {
    id: "1 Ngamprah",
    school: "State Junior High School 1 Ngamprah",
    period: {
      start: "07.2013",
      end: "05.2019",
    },
  },
]
