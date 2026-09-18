import { Beat } from "@/components/Journey/Beat";
import { Finale } from "@/components/Journey/Finale";
import { Opener } from "@/components/Journey/Opener";
import { sectionAnchor } from "@/content/Types";
import type { GuideGroup, GuideSection } from "@/content/Types";

function copy(section: GuideSection) {
  return {
    title: section.label ?? "",
    lede: section.lede,
    paragraphs: section.paragraphs,
    highlights: section.highlights,
    scale: section.scale,
  };
}

export function Journey({ groups }: { groups: GuideGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.id} id={group.id}>
          {group.sections.map((section) => {
            const id = sectionAnchor(group.id, section.id);
            const body = copy(section);

            if (section.id === "this-is-life-row") {
              return (
                <Finale
                  key={id}
                  id={id}
                  wordmark={body.title}
                  supporting={body.paragraphs?.[0] ?? ""}
                />
              );
            }

            if (section.id === "role-models") {
              return <Opener key={id} id={id} title={body.title} />;
            }

            return <Beat key={id} id={id} {...body} />;
          })}
        </div>
      ))}
    </>
  );
}
