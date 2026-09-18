import { access, introduction } from "./01_Introduction";
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

export const groups = [introduction, access, support];
