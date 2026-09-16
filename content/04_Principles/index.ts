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
        },
        {
          id: "leadership-means-service",
          heading: "Leadership means service.",
          body: "We develop our abilities so we can care for others and contribute.",
        },
        {
          id: "entrusted-with",
          heading: "We care for what we’re entrusted with.",
          body: "We steward people, resources, commitments, and the truth of what we report.",
        },
        {
          id: "discipleship",
          heading: "Discipleship.",
          body: "Our foundation is shaped by the teachings of Jesus: love your neighbor, tell the truth, practice mercy, take responsibility, and use what you have to serve others.",
        },
      ],
    },
  ],
};
