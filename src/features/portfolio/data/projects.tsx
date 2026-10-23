import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "tanya-kampus-test-plan",
    title: "Tanya Kampus Test Plan",
    period: {
      start: "05.2026",
      end: "05.2026",
    },
    link: "https://tanyakampus.vercel.app/",
    description: `Test plan and functional UI testing for [Tanya Kampus](https://tanyakampus.vercel.app/), a web platform that helps students find the major and career that fit their interests and personality.
- Wrote the test plan: scope, approach, assumptions, schedule, risks, and responsibilities
- Designed black box functional tests for registration, login, forgot password, profile, and FAQ & contact
- Defined pass/fail criteria by bug severity: 0% critical, under 2% high, under 4% medium, under 6% low
- Tracked requirements KF001 to KF204 through test cases and a final report with pass/fail results
`,
    skills: [
      "Software QA",
      "Test Plan",
      "Black Box Testing",
      "Functional Testing",
      "UI Testing",
      "Test Case Design",
      "Bug Reporting",
    ],
  },
]
