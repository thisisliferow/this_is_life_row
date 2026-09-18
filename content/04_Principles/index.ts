import type { GuideGroup } from "../Types";

export const principles: GuideGroup = {
  id: "principles",
  label: "Principles",
  heading: "What we stand on.",
  sections: [
    {
      id: "shared-principles",
      numbered: [
        {
          id: "equal-access",
          heading: "Equal access and opportunity.",
          body: "Zip codes shouldn’t determine your access to opportunities.",
          points: [
            {
              access: "Entrepreneurs and working professionals",
              possible:
                "Exposure to careers, useful skills, and relationships that can open doors.",
            },
          ],
        },
        {
          id: "leadership-service",
          heading: "Leadership means service.",
          points: [
            {
              access: "Leadership and service projects",
              possible:
                "Opportunities to keep commitments, solve problems, and contribute to others.",
            },
          ],
        },
        {
          id: "field-fun",
          heading: "Field and fun.",
          points: [
            {
              access: "Field days across Los Angeles",
              possible:
                "Time to play, discover interests, build friendships, and experience more of the city.",
            },
          ],
        },
        {
          id: "health-wellness",
          heading: "Health and wellness.",
          points: [
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
          ],
        },
      ],
    },
  ],
};
