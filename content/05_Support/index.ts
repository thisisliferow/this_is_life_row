import type { GuideGroup } from "../Types";

export const support: GuideGroup = {
  id: "support",
  label: "Support",
  heading: "Building the first cohort.",
  sections: [
    {
      id: "delivery-partners",
      label: "Delivery partners.",
      scale: "statement-sm",
      paragraphs: [
        "The first cohort needs a room, a meal, facilitators, and mentors. Licensed therapy, gyms, and field days are not in this pilot until a named partner and funding exist.",
      ],
      pairs: {
        headers: ["Partner role", "Proposed contribution"],
        rows: [
          {
            label: "Host venue",
            detail: "A room for 12 sessions and about 14 people.",
          },
          {
            label: "Financial education",
            detail: "Two practical money workshops.",
          },
          {
            label: "Career partner",
            detail:
              "A workshop, practice interviews, and introductions to real work.",
          },
          {
            label: "Wellness educators",
            detail:
              "Three sessions across movement, stress, and relationships.",
          },
          {
            label: "Mentor network",
            detail:
              "Weekly check-ins outside the three-hour group session, plus goal support.",
          },
          {
            label: "Meals and transportation",
            detail:
              "A meal each week, and a ride when getting there would otherwise be the reason someone misses.",
          },
          {
            label: "Community project host",
            detail: "A bounded service activity in weeks 10–11.",
          },
          {
            label: "Licensed therapy",
            detail:
              "Later: professional care once a licensed partner and funding are confirmed. Not in the first cash budget.",
          },
        ],
      },
    },
    {
      id: "how-we-will-spend",
      label: "How we will spend.",
      scale: "statement-sm",
      paragraphs: [
        "We will start small enough to know every young man in the room. The figures below are planning estimates for the 12-week gathering—staff, meals, transportation, a room, workshops, and basic administration. About $1,600 per student, $19,100 rounded. They do not include licensed therapy, gym access, or field days, and they are not a fundraising target until quotes exist.",
      ],
      pairs: {
        headers: ["Expense", "Estimate"],
        rows: [
          {
            label: "Program lead",
            detail: "8 hours/week × $40 × 12 weeks — $3,840",
          },
          {
            label: "Second facilitator",
            detail: "5 hours/week × $30 × 12 weeks — $1,800",
          },
          {
            label: "Specialist workshops",
            detail: "6 sessions × $250 — $1,500",
          },
          {
            label: "Meals",
            detail: "14 people × $15 × 12 sessions — $2,520",
          },
          {
            label: "Transportation support",
            detail: "12 students × $15 × 12 sessions — $2,160",
          },
          {
            label: "Materials and activities",
            detail: "12 students × $150 — $1,440",
          },
          {
            label: "Venue",
            detail: "12 sessions × $100 — $1,200",
          },
          {
            label: "Insurance, screening, and administration",
            detail: "Placeholder — $1,500",
          },
          {
            label: "Evaluation and graduation",
            detail: "Placeholder — $600",
          },
          {
            label: "Subtotal",
            detail: "$16,560",
          },
          {
            label: "Contingency",
            detail: "15% × $16,560 — $2,484",
          },
          {
            label: "Estimated pilot budget",
            detail: "$19,044, rounded to $19,100",
          },
        ],
      },
    },
    {
      id: "how-we-will-measure",
      label: "How we will measure.",
      scale: "statement-sm",
      paragraphs: [
        "Collect a baseline, track participation, review completed work, and follow up.",
      ],
      measures: [
        {
          measure: "Participation",
          method: "Facilitator attendance log each week.",
          target: "10 of 12 attend at least 9 of 12 sessions.",
        },
        {
          measure: "Practical skills",
          method:
            "Review budgets and résumés; repeat the same short money exercise at intake and exit.",
          target:
            "10 of 12 complete core work. Report the actual change in scores.",
        },
        {
          measure: "Trusted support",
          method:
            "Ask at intake and exit whether there is an adult they can turn to.",
          target: "12 of 12 identify a trusted adult at exit.",
        },
        {
          measure: "Personal milestone",
          method:
            "Participant and mentor agree a goal by week 3 and review evidence at exit.",
          target: "9 of 12 achieve at least one documented milestone.",
        },
        {
          measure: "Continued progress",
          method:
            "Check action-plan progress at 30 and 90 days after completion.",
          target:
            "Attempt follow-up with all 12. Report how many respond and what progress they describe.",
        },
      ],
    },
    {
      id: "launch-readiness",
      label: "Launch readiness.",
      scale: "statement-sm",
      numbered: [
        {
          heading: "Program and people.",
          body: "Set eligibility, dates, venue, facilitators, mentors, and safeguarding before day one. Licensed therapy is not required for this pilot.",
        },
        {
          heading: "Funding and operations.",
          body: "Separate cash from in-kind support, confirm who administers funds, and prepare enrollment and follow-up.",
        },
      ],
    },
    {
      id: "help-build-it",
      label: "Help build the first cohort.",
      scale: "statement-sm",
      paragraphs: [
        "We’re bringing together funding, mentors, spaces, and expertise to make the proposed pilot possible.",
      ],
      numbered: [
        {
          heading: "Give time or funding.",
          body: "Mentorship, teaching, space, meals, transportation, introductions, or a contribution toward the estimated budget.",
        },
        {
          heading: "Join the interest list.",
          body: "For participants and families. Receive updates when eligibility, dates, and enrollment are confirmed.",
        },
        {
          heading: "Become a program partner.",
          body: "Help deliver a defined part of the curriculum or remove a barrier to participation.",
        },
      ],
    },
  ],
};
