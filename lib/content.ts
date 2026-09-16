export type NavGroup = {
  id: string;
  label: string;
  items: { id: string; label: string }[];
};

export const navGroups: NavGroup[] = [
  {
    id: "introduction",
    label: "Introduction",
    items: [
      { id: "mission", label: "Mission" },
      { id: "what-is-life-row", label: "What is Life Row?" },
      { id: "why-we-exist", label: "Why we exist" },
      { id: "who-were-here-for", label: "Who we’re here for" },
      { id: "why-here", label: "Why here" },
    ],
  },
  {
    id: "community",
    label: "Community",
    items: [
      { id: "one-community", label: "One community" },
      { id: "belonging-and-responsibility", label: "Belonging and responsibility" },
      { id: "what-access-means", label: "What access means" },
      { id: "field-days", label: "Field days" },
    ],
  },
  {
    id: "curriculum",
    label: "Curriculum",
    items: [
      { id: "from-belonging-to-leadership", label: "From belonging to leadership" },
      { id: "five-stages", label: "Five stages" },
      { id: "graduation-and-beyond", label: "Graduation and beyond" },
    ],
  },
  {
    id: "principles",
    label: "Principles",
    items: [
      { id: "shared-principles", label: "Shared principles" },
      { id: "faith-foundation", label: "Faith foundation" },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      { id: "stewardship-and-progress", label: "Stewardship and progress" },
      { id: "program-details", label: "Program details being developed" },
    ],
  },
];

export const accessRows = [
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
] as const;

export const principles = [
  {
    title: "Every person has worth.",
    body: "Circumstances and mistakes do not cancel someone’s dignity.",
  },
  {
    title: "Love shows up.",
    body: "We learn names, keep commitments, notice absences, and meet real needs.",
  },
  {
    title: "Mercy makes room for growth.",
    body: "We address harm while helping people take responsibility and find a way forward.",
  },
  {
    title: "Leadership means service.",
    body: "We develop our abilities so we can care for others and contribute.",
  },
  {
    title: "Joy belongs here.",
    body: "Friendship, play, discovery, and celebration are part of a healthy life.",
  },
  {
    title: "We care for what we’re entrusted with.",
    body: "We take responsibility for people, resources, commitments, and the truth of what we report.",
  },
] as const;

export type CurriculumStage = {
  number: string;
  name: string;
  principles: string[];
  practice: string;
  evidence: string;
};

export const curriculumStages: CurriculumStage[] = [
  {
    number: "01",
    name: "Belong and face reality",
    principles: ["Tell the truth.", "Don’t let shame make your decisions."],
    practice:
      "Build trusted relationships, ask for help, name current challenges, and set personal goals.",
    evidence:
      "Can identify a trusted person, describe a need, and choose a next step. No required disclosure of trauma.",
  },
  {
    number: "02",
    name: "Build daily discipline",
    principles: [
      "Keep your responsibilities.",
      "Control your appetites.",
      "Accept correction.",
    ],
    practice:
      "Keep commitments, establish routines, pause before acting, and receive feedback.",
    evidence:
      "Can describe a routine, demonstrate follow-through, and reflect on a response to correction.",
  },
  {
    number: "03",
    name: "Take responsibility and repair",
    principles: ["Love people.", "Repair what you’ve damaged."],
    practice:
      "Work through disagreements, own your part, and make appropriate amends.",
    evidence:
      "Can acknowledge impact and plan a safe, appropriate repair without forcing contact or reconciliation.",
  },
  {
    number: "04",
    name: "Build your future",
    principles: ["Steward what remains.", "Work diligently."],
    practice:
      "Practice budgeting, care for health, complete a project, and explore education or work.",
    evidence:
      "A practical budget, completed project, and realistic next-step plan.",
  },
  {
    number: "05",
    name: "Lead through service",
    principles: ["Use what you’ve learned for others."],
    practice:
      "Contribute to a community project, support classmates, and practice dependable leadership.",
    evidence:
      "A service contribution and reflection on responsibility to others.",
  },
];

export const mediaSlots = {
  afterOpening: {
    label: "After the opening",
    lookingFor:
      "Personality, humor, interests, friendship, and pride. Let viewers meet the young men first.",
  },
  whyWeExist: {
    label: "Why we exist",
    lookingFor:
      "Specific missing support: somewhere to go, transport, meals, someone to talk to, activities, or guidance.",
  },
  whoWereHereFor: {
    label: "Who we’re here for",
    lookingFor:
      "What people misunderstand about them; voluntarily shared pressures; their own ambitions.",
  },
  whyHere: {
    label: "Why here",
    lookingFor:
      "Neighborhood life and the connection between the Arts District and Boyle Heights.",
  },
  oneCommunity: {
    label: "One community",
    lookingFor:
      "What friends, bikes, belonging, respect, and people looking out for one another mean to them.",
  },
  accessAndFieldDays: {
    label: "What access means / Field days",
    lookingFor:
      "What they want to try, where they want to go, and who they would like to learn from.",
  },
  curriculum: {
    label: "Curriculum",
    lookingFor:
      "Real reflections on effort, accepting help, keeping commitments, handling conflict, and repairing relationships.",
  },
  graduation: {
    label: "Graduation and beyond",
    lookingFor:
      "Who they want to become and what they want younger people to learn from them.",
  },
} as const;
