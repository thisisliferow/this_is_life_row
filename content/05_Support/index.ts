import { volunteerEmail } from "../contact";
import type { GuideGroup } from "../Types";

export const support: GuideGroup = {
  id: "support",
  label: "Help launch the first cohort.",
  heading: "Help launch the first cohort.",
  banner: {
    src: "/banners/cohort-group.jpg",
    alt: "Young men standing together on a neighborhood sidewalk.",
  },
  sections: [
    {
      id: "help-launch-it",
      numbered: [
        {
          id: "give",
          heading: "Give or volunteer.",
          body: "Mentor, teach a skill, provide meals, or help with transportation.",
          href: "/give",
        },
        {
          id: "partner",
          heading: "Partner with us.",
          body: "Provide space, professional services, or recurring funding through your organization.",
          href: "/partner",
        },
        {
          id: "interest-list",
          heading: "Join the interest list",
          body: "Get updates when eligibility, dates, and enrollment are confirmed.",
          href: `mailto:${volunteerEmail}`,
          external: true,
        },
      ],
    },
  ],
};
