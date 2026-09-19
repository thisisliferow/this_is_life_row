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
      copyEmail: volunteerEmail,
    },
  ],
};
