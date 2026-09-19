export type BodyScale = "display" | "body";

export type AccessRow = {
  access: string;
  possible: string;
};

export type GuideBanner = {
  src: string;
  alt: string;
};

export type NumberedItem = {
  id?: string;
  heading: string;
  body?: string;
  href?: string;
  image?: GuideBanner;
  points?: AccessRow[];
};

export type CurriculumStage = {
  heading: string;
  principles: string[];
  resources: string[];
};

export type GuideLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type SourceRow = {
  area: string;
  evidence: string;
  source: {
    label: string;
    href: string;
  };
};

export type PairRow = {
  label: string;
  detail: string;
};

export type PairTableCopy = {
  headers: [string, string];
  rows: PairRow[];
};

export type MeasureRow = {
  measure: string;
  method: string;
  target: string;
};

export type GuideHero = {
  wordmark?: string;
  kicker?: string;
  headline?: string;
  image?: GuideBanner;
  images?: GuideBanner[];
  paragraphs: string[];
};

export type SitePage = {
  href: string;
  label: string;
};

export type GuideSection = {
  id: string;
  label?: string;
  caption?: string;
  scale?: BodyScale;
  paragraphs?: string[];
  closing?: string[];
  lede?: string;
  highlights?: string[];
  access?: AccessRow[];
  numbered?: NumberedItem[];
  numberedLayout?: "display" | "stack";
  copyEmail?: string;
  stages?: CurriculumStage[];
  sources?: SourceRow[];
  measures?: MeasureRow[];
  pairs?: PairTableCopy;
  link?: GuideLink;
  links?: GuideLink[];
};

export type GuideGroup = {
  id: string;
  label: string;
  heading?: string;
  banner?: GuideBanner;
  sections: GuideSection[];
};

export function sectionAnchor(groupId: string, sectionId: string) {
  return `${groupId}-${sectionId}`;
}
