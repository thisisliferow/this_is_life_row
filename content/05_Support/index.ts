import { volunteerEmail } from "../contact";
import type { GuideGroup } from "../Types";

export const supportInvite = "Help us launch.";

export const support: GuideGroup = {
  id: "support",
  label: "Help us launch.",
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
