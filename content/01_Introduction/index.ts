import type { GuideGroup } from "../Types";

export const introduction: GuideGroup = {
  id: "introduction",
  label: "This is Life Row.",
  sections: [],
};

export const access: GuideGroup = {
  id: "access",
  label: "What we provide.",
  heading: "What we provide.",
  sections: [
    {
      id: "offerings",
      numberedLayout: "stack",
      numbered: [
        {
          id: "health-support",
          heading: "Health and support.",
          body: "Licensed therapists, nutritious meals, and fitness activities.",
          image: {
            src: "/access/health-belonging.jpg",
            alt: "Three young men with a skateboard, electric bike, and BMX at a palm lined park.",
          },
        },
        {
          id: "skills-mentorship",
          heading: "Skills and mentorship.",
          body: "Financial literacy, creative skills, and trade development.",
          image: {
            src: "/access/skills-opportunity.jpg",
            alt: "Young men gathered around a minibike on a concrete barrier.",
          },
        },
        {
          id: "community-service",
          heading: "Leadership through service. ",
          body: "Suppporting beach cleanups, and helping the homeless.",
          image: {
            src: "/access/leadership-service.jpg",
            alt: "Three young men riding a BMX, an electric bike, and a skateboard down a residential street.",
          },
        },
        {
          id: "outings-across-la",
          heading: "Outings across LA.",
          body: "Group field days exploring hobbies and interests.",
          image: {
            src: "/access/experiences-across-la.jpg",
            alt: "Young men looking out over the Los Angeles skyline.",
          },
        },
      ],
    },
  ],
};
