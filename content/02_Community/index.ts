import type { GuideGroup } from "../Types";

export const community: GuideGroup = {
  id: "community",
  label: "Community",
  heading: "Life together.",
  sections: [
    {
      id: "one-community",
      label: "One community.",
      scale: "statement-sm",
      paragraphs: [
        "Each class will share meals, train, build projects, explore the city, and work through challenges together.",
      ],
    },
    {
      id: "belonging-and-responsibility",
      label: "Belonging and responsibility.",
      scale: "statement-sm",
      lede: "Belonging starts on day one.",
      paragraphs: [
        "You don’t have to have it together to belong here. We hold clear expectations, address harm, and help young men take responsibility and make things right.",
      ],
    },
    {
      id: "what-access-means",
      label: "What access means.",
      scale: "statement-sm",
      paragraphs: [
        "We're building care, experiences, and relationships too often available only through family wealth. The first cohort starts with a weekly gathering, a meal, and consistent people. Licensed therapy, fitness partnerships, and field days belong to the longer program, once partners and funding are in place.",
      ],
      access: [
        {
          access: "Licensed therapists",
          possible:
            "Professional support for processing pain, understanding emotions, and developing ways to cope.",
        },
        {
          access: "Nutritious meals",
          possible:
            "A dependable meal and time to sit together, connect, and be known.",
        },
        {
          access: "Gyms, fitness, and wellness",
          possible:
            "Constructive outlets, healthy routines, teamwork, and care for physical health.",
        },
        {
          access: "Financial experts and education",
          possible:
            "Practical experience with budgeting, saving, and understanding financial choices.",
        },
        {
          access: "Entrepreneurs and working professionals",
          possible:
            "Exposure to careers, useful skills, and relationships that can open doors.",
        },
        {
          access: "Leadership and service projects",
          possible:
            "Opportunities to keep commitments, solve problems, and contribute to others.",
        },
        {
          access: "Field days across Los Angeles",
          possible:
            "Time to play, discover interests, build friendships, and experience more of the city.",
        },
      ],
    },
  ],
};
