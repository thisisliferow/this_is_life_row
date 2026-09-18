import type { GuideGroup } from "../Types";

export const community: GuideGroup = {
  id: "community",
  label: "Life together.",
  heading: "Life together.",
  sections: [
    {
      id: "one-community",
      label: "One cohort. Four times a year.",
      paragraphs: [
        "Each group of four meets one weekday. All twelve come together on Sundays for **meals, activities, and service projects**.",
      ],
      pairs: {
        headers: ["Day", "Participants"],
        rows: [
          {
            label: "Monday, 4 p.m.",
            detail: "Ages 10 to 14.",
          },
          {
            label: "Wednesday, 4 p.m.",
            detail: "Ages 15 to 17.",
          },
          {
            label: "Friday, 4 p.m.",
            detail: "Ages 18 to 21.",
          },
          {
            label: "Sunday, 4 p.m.",
            detail: "All age groups.",
          },
        ],
      },
    },
  ],
};
