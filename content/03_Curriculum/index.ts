import type { GuideGroup } from "../Types";

export const curriculum: GuideGroup = {
  id: "curriculum",
  label: "Curriculum",
  heading: "A path toward leadership.",
  sections: [
    {
      id: "five-stages",
      label: "Five stages.",
      scale: "statement-sm",
      paragraphs: [
        "Each class will practice the habits that help a young man care for himself, keep his word, and become someone others can depend on. The journey starts with belonging and grows through responsibility, practical work, and service.",
      ],
      stages: [
        {
          heading: "Belong and face reality.",
          principles: [
            "Tell the truth.",
            "Don’t let shame make your decisions.",
          ],
          resources: ["Therapy", "Meals", "Peer support"],
        },
        {
          heading: "Build daily discipline.",
          principles: [
            "Keep your responsibilities.",
            "Practice self-control.",
            "Accept correction.",
          ],
          resources: ["Fitness", "Meals", "Service"],
        },
        {
          heading: "Take responsibility and make things right.",
          principles: ["Love people.", "Make things right."],
          resources: ["Therapy", "Peer support", "Service"],
        },
        {
          heading: "Build your future.",
          principles: ["Care for what you have.", "Work diligently."],
          resources: ["Financial education", "Career exposure"],
        },
        {
          heading: "Pay it forward.",
          principles: [
            "Lead through service. Use what you’ve learned for others.",
          ],
          resources: ["Service", "Field days"],
        },
      ],
      closing: [
        "The five stages describe ongoing development. The twelve weeks below organize the first cohort’s activities. Young men may revisit any stage; their place in the community does not depend on moving through the curriculum perfectly.",
      ],
    },
    {
      id: "weekly-experience",
      label: "Weekly experience.",
      scale: "statement-sm",
      paragraphs: [
        "A proposed first cohort of 12 young men meets once a week for three hours, with a meal. A brief mentor check-in happens separately, outside that session.",
      ],
      pairs: {
        headers: ["Time", "What happens"],
        rows: [
          {
            label: "30 minutes",
            detail: "Arrive and connect. Shared meal and personal check-in.",
          },
          {
            label: "45 minutes",
            detail:
              "Learn a skill. A practical workshop led by a facilitator or guest.",
          },
          {
            label: "75 minutes",
            detail: "Put it to work. Practice, movement, a visit, or project work.",
          },
          {
            label: "30 minutes",
            detail:
              "Reflect and commit. Discuss the experience and choose one next step.",
          },
        ],
      },
    },
    {
      id: "twelve-weeks",
      label: "Twelve weeks.",
      caption: "Build skills. Practice them. Carry them forward.",
      numberedLayout: "stack",
      numbered: [
        {
          heading: "Weeks 1–3. Belonging, identity, and responsibility.",
          body: "Establish trust, recognize strengths, and connect personal choices to the future each participant wants.",
        },
        {
          heading: "Weeks 4–6. Money, work, and independence.",
          body: "Practice the skills needed to manage money and approach opportunities with confidence.",
        },
        {
          heading: "Weeks 7–9. Health, relationships, and self-management.",
          body: "Develop useful routines and practice responding to stress and conflict.",
        },
        {
          heading: "Weeks 10–12. Service, leadership, and next steps.",
          body: "Apply the cohort’s learning through shared responsibility and a concrete plan beyond graduation.",
        },
      ],
    },
    {
      id: "graduation-and-beyond",
      label: "Graduation and beyond.",
      scale: "statement-sm",
      paragraphs: [
        "Each class will work toward graduation through shared experiences, practical learning, and service. Our goal is for graduates to leave with stronger relationships, useful life skills, and a next step toward education, work, or entrepreneurship—and, over time, to return as mentors the next class can turn to.",
      ],
    },
  ],
};
