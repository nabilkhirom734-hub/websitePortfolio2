import { BriefcaseBusinessIcon, DraftingCompassIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "unikom",
    companyName: "Universitas Komputer Indonesia",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://unikom.ac.id",
    location: "Bandung, Indonesia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Information Systems Intern (Kerja Praktik)",
        employmentPeriod: {
          start: "08.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        icon: <DraftingCompassIcon />,
        description: `Completed a one-month internship at the Information System Study Program, Universitas Komputer Indonesia (UNIKOM), focusing on the analysis and design of a web-based lecturer data management system.
- Analyzed administrative workflows and system requirements for a web-based lecturer data management system during a one-month internship.
- Designed system workflows using flowmaps, context diagrams, and data flow diagrams (DFD) to document the system structure.
- Contributed to system design covering lecturer data entry, examination data management, and reporting.
- Completed the Kerja Praktik program from August 1 to August 30, 2025.`,
        skills: [
          "System Analysis",
          "System Design",
          "Flowmap",
          "Context Diagram",
          "Data Flow Diagram (DFD)",
          "Requirements Analysis",
        ],
        isExpanded: true,
      },
    ],
  },
]
