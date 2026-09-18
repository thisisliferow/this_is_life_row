import { Journey } from "@/components/Journey/Journey";
import type { GuideGroup, SitePage } from "@/content/Types";

export function JourneyPage({
  groups,
}: {
  groups: GuideGroup[];
  pages?: SitePage[];
}) {
  return (
    <div className="canvas-ink min-h-dvh">
      <div className="content-canvas relative z-0 min-w-0">
        <Journey groups={groups} />
      </div>
    </div>
  );
}
