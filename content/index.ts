import { introduction } from "./01_Introduction";
import { community } from "./02_Community";
import { curriculum } from "./03_Curriculum";
import { principles } from "./04_Principles";
import { support } from "./05_Support";

export { hero } from "./Hero";
export { sectionAnchor } from "./Types";
export type {
  AccessRow,
  BodyScale,
  CurriculumStage,
  GuideGroup,
  GuideHero,
  GuideSection,
  MeasureRow,
  NumberedItem,
  PairTableCopy,
  SitePage,
  SourceRow,
} from "./Types";

export const groups = [
  introduction,
  community,
  curriculum,
  principles,
  support,
];
