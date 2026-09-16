import type { GuideGroup } from "../Types";

export const introduction: GuideGroup = {
  id: "introduction",
  label: "Introduction",
  sections: [
    {
      id: "mission",
      label: "Mission.",
      scale: "display",
      paragraphs: [
        "To develop young men who build meaningful futures and become the role models their communities can depend on.",
      ],
    },
    {
      id: "what-is-life-row",
      label: "What is Life Row?",
      scale: "statement-md",
      paragraphs: [
        "Life Row is a planned afterschool community where young men enter as a class, grow together, and graduate together. Our work is shaped by the teachings of Jesus.",
      ],
    },
    {
      id: "why-we-exist",
      label: "Why we exist.",
      scale: "statement-sm",
      paragraphs: [
        "Too many young people face pain, pressure, and difficult decisions without a community consistently involved in their lives. Access to care, constructive outlets, and people who open doors too often depends on what their family can afford.",
      ],
    },
    {
      id: "who-were-here-for",
      label: "Who we’re here for.",
      scale: "statement-sm",
      paragraphs: [
        "We welcome East LA’s boys and young men who need people in their corner, including those navigating probation, gang involvement, conflict at home, or uncertainty about their future.",
        "Anger, distrust, and challenging behavior call for patient relationships, clear boundaries, and dependable support. A young man’s hardest moment does not erase his worth or decide who he can become.",
      ],
    },
    {
      id: "what-the-numbers-are",
      label: "The context.",
      scale: "statement-sm",
      sources: [
        {
          area: "Violence among youth",
          evidence:
            "In 2020, males accounted for 80% of youth violent-crime arrests, including 92% of murder arrests and 88% of robbery arrests.",
          source: {
            label: "OJJDP, Trends in Youth Arrests for Violent Crimes",
            href: "https://ojjdp.ojp.gov/library/publications/trends-youth-arrests-violent-crimes",
          },
        },
        {
          area: "Jail incarceration",
          evidence:
            "In 2023, males were held in local jails at 343 per 100,000, compared with 56 per 100,000 females—about six times the rate.",
          source: {
            label: "Bureau of Justice Statistics, Jail Inmates in 2023",
            href: "https://bjs.ojp.gov/library/publications/jail-inmates-2023-statistical-tables",
          },
        },
        {
          area: "Gang involvement",
          evidence:
            "A national youth study found 11% of boys versus 6% of girls reported having joined a gang. A multicity study found 8.8% versus 7.8%.",
          source: {
            label: "OJJDP, Gang Prevention: An Overview of Research and Programs",
            href: "https://www.ojp.gov/pdffiles1/ojjdp/231116.pdf",
          },
        },
        {
          area: "Structured programs",
          evidence:
            "Randomized evaluations of Chicago’s Becoming a Man program found reductions in violent-crime arrests of 45–50% during the studied interventions.",
          source: {
            label: "Heller et al., Becoming a Man evaluations (NBER)",
            href: "https://www.nber.org/papers/w21178",
          },
        },
      ],
    },
    {
      id: "why-here",
      label: "Why here.",
      scale: "statement-sm",
      paragraphs: [
        "Our first center is planned for the Arts District, connected to Boyle Heights. We want to turn that proximity into shared access: a place where East LA’s young people, families, and culture help shape the community, and where resources from across Los Angeles become part of everyday life.",
      ],
    },
  ],
};
