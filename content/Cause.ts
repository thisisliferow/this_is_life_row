import type { GuideGroup, GuideHero } from "./Types";

export const causeHero: GuideHero = {
  wordmark: "This is Life Row.",
  paragraphs: [],
};

export const causeGroups: GuideGroup[] = [
  {
    id: "pitch",
    label: "Life Row",
    sections: [
      {
        id: "role-models",
      },
      {
        id: "who-were-here-for",
        label: "Who we’re here for.",
        paragraphs: [
          "We champion young men navigating probation, gang involvement, or simply those in need of a safe place away from home.",
        ],
      },
      {
        id: "one-community",
        label: "12 kids, one cohort.",
        paragraphs: [
          "Each cohort grows together and belongs together. Ages range from 10 to 21. Four cohorts a year.",
        ],
      },
      {
        id: "brotherhood",
        label: "Service, leadership, and a brotherhood.",
      },
      {
        id: "what-we-progress",
        label: "What we progress.",
        highlights: [
          "Equal opportunity.",
          "Structure.",
          "Reformation.",
          "Health and wellness.",
          "Sponsorships.",
          "Community engagement.",
        ],
      },
      {
        id: "how",
        label: "How.",
        highlights: [
          "Sponsorships.",
          "Big brothers.",
          "Community service.",
          "Self development.",
        ],
      },
      {
        id: "together",
        label: "Together.",
        lede: "We bring the community together.",
        highlights: [
          "LAPD.",
          "LAFD.",
          "Teachers.",
          "Life coaches.",
          "Entrepreneurs.",
          "Licensed therapists.",
          "Professional athletes.",
          "Artists.",
        ],
        paragraphs: ["The best of what LA has to offer."],
      },
      {
        id: "program-partner",
        label: "Become a program partner.",
        paragraphs: [
          "Looking to pay it forward? Become a program partner.",
        ],
      },
    ],
  },
  {
    id: "point",
    label: "The point.",
    sections: [
      {
        id: "this-is-life-row",
        label: "This is Life Row.",
        scale: "display",
        paragraphs: [
          "Nonprofit serving East LA youth and young adults with resources traditionally limited by income.",
        ],
      },
    ],
  },
];
