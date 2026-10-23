import {
  AlertTriangleIcon,
  BoxIcon,
  BugIcon,
  CheckCheckIcon,
  CheckCircleIcon,
  CheckSquareIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FlagIcon,
  GlobeIcon,
  LanguagesIcon,
  ListChecksIcon,
  MonitorIcon,
  PlayIcon,
  ScaleIcon,
  SearchIcon,
} from "lucide-react"

import { Css3Icon, JsIcon, MySQLIcon } from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Software Testing
  {
    key: "manual-testing",
    title: "Manual Testing",
    href: "https://en.wikipedia.org/wiki/Manual_testing",
    icon: <CheckSquareIcon />,
    categories: ["Software Testing"],
  },
  {
    key: "ui-testing",
    title: "UI Testing",
    href: "https://en.wikipedia.org/wiki/Graphical_user_interface_testing",
    icon: <MonitorIcon />,
    categories: ["Software Testing"],
  },
  {
    key: "functional-testing",
    title: "Functional Testing",
    href: "https://en.wikipedia.org/wiki/Functional_testing",
    icon: <CheckCircleIcon />,
    categories: ["Software Testing"],
  },
  {
    key: "black-box-testing",
    title: "Black Box Testing",
    href: "https://en.wikipedia.org/wiki/Black-box_testing",
    icon: <BoxIcon />,
    categories: ["Software Testing"],
  },

  // Web Technologies
  {
    key: "css",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <Css3Icon />,
    categories: ["Web Technologies"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Web Technologies"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Web Technologies"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com",
    icon: <MySQLIcon />,
    categories: ["Web Technologies"],
  },

  // Test Documentation
  {
    key: "test-plan",
    title: "Test Plan",
    href: "https://en.wikipedia.org/wiki/Test_plan",
    icon: <FileTextIcon />,
    categories: ["Test Documentation"],
  },
  {
    key: "test-case-design",
    title: "Test Case Design",
    href: "https://en.wikipedia.org/wiki/Test_case",
    icon: <ListChecksIcon />,
    categories: ["Test Documentation"],
  },
  {
    key: "bug-reporting",
    title: "Bug Reporting",
    href: "https://en.wikipedia.org/wiki/Software_bug",
    icon: <BugIcon />,
    categories: ["Test Documentation"],
  },
  {
    key: "expected-vs-actual",
    title: "Expected vs. Actual Results",
    href: "https://en.wikipedia.org/wiki/Test_case",
    icon: <ScaleIcon />,
    categories: ["Test Documentation"],
  },

  // Defect Management
  {
    key: "bug-identification",
    title: "Bug Identification",
    href: "https://en.wikipedia.org/wiki/Software_testing",
    icon: <SearchIcon />,
    categories: ["Defect Management"],
  },
  {
    key: "severity-classification",
    title: "Severity Classification",
    href: "https://en.wikipedia.org/wiki/Bug_priority_and_severity",
    icon: <AlertTriangleIcon />,
    categories: ["Defect Management"],
  },
  {
    key: "priority-classification",
    title: "Priority Classification",
    href: "https://en.wikipedia.org/wiki/Bug_priority_and_severity",
    icon: <FlagIcon />,
    categories: ["Defect Management"],
  },
  {
    key: "test-execution",
    title: "Test Execution",
    href: "https://en.wikipedia.org/wiki/Test_execution",
    icon: <PlayIcon />,
    categories: ["Defect Management"],
  },
  {
    key: "pass-fail-evaluation",
    title: "Pass/Fail Evaluation",
    href: "https://en.wikipedia.org/wiki/Software_testing",
    icon: <CheckCheckIcon />,
    categories: ["Defect Management"],
  },

  // Tools
  {
    key: "microsoft-excel",
    title: "Microsoft Excel",
    href: "https://www.microsoft.com/en-us/microsoft-365/excel",
    icon: <FileSpreadsheetIcon />,
    categories: ["Tools"],
  },
  {
    key: "doc",
    title: "DOC",
    href: "https://www.microsoft.com/en-us/microsoft-365/word",
    icon: <FileTextIcon />,
    categories: ["Tools"],
  },

  // Bahasa
  {
    key: "bahasa-indonesia",
    title: "Bahasa Indonesia (fluent)",
    href: "https://id.wikipedia.org/wiki/Bahasa_Indonesia",
    icon: <LanguagesIcon />,
    categories: ["Bahasa"],
  },
  {
    key: "english",
    title: "English ( Basic )",
    href: "https://en.wikipedia.org/wiki/English_language",
    icon: <GlobeIcon />,
    categories: ["Bahasa"],
  },
]
