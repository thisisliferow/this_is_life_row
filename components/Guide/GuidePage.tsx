import { AccessTable } from "@/components/Guide/AccessTable";
import { ContentRow } from "@/components/Guide/ContentRow";
import { CurriculumStages } from "@/components/Guide/CurriculumStages";
import { GroupBanner } from "@/components/Guide/GroupBanner";
import { Hero } from "@/components/Guide/Hero";
import { MeasureTable } from "@/components/Guide/MeasureTable";
import { NumberedList } from "@/components/Guide/NumberedList";
import { PageFooter } from "@/components/Guide/PageFooter";
import { PairTable } from "@/components/Guide/PairTable";
import { RichText } from "@/components/Guide/RichText";
import { SiteHeader } from "@/components/Guide/SiteHeader";
import { SourceTable } from "@/components/Guide/SourceTable";
import { Statement, StatementBody } from "@/components/Guide/StatementBody";
import { sectionAnchor } from "@/content/Types";
import type { GuideGroup, GuideHero } from "@/content/Types";

export function GuidePage({
  groups,
  hero,
}: {
  groups: GuideGroup[];
  hero: GuideHero;
}) {
  return (
    <div className="canvas-ink min-h-dvh">
      <div className="scroll-progress" aria-hidden />
      <SiteHeader overlay />
      <div className="content-canvas min-w-0">
        <Hero {...hero} />

        {groups.map((group) => {
          if (!group.heading && group.sections.length === 0) return null;

          return (
            <div key={group.id}>
            {group.heading ? (
              <GroupBanner
                id={group.id}
                heading={group.heading}
                banner={group.banner}
              />
            ) : (
              <div id={group.id} className="scroll-mt-6" />
            )}
            {group.sections.map((section) => {
              const id = sectionAnchor(group.id, section.id);
              const hasLeadCopy =
                Boolean(section.lede) ||
                Boolean(section.paragraphs?.length) ||
                Boolean(section.highlights?.length);

              return (
                <ContentRow
                  key={id}
                  id={id}
                  label={section.label}
                  caption={section.caption}
                >
                  {hasLeadCopy ? (
                    <StatementBody scale={section.scale}>
                      {section.lede ? (
                        <p className="text-heading">
                          <RichText text={section.lede} />
                        </p>
                      ) : null}
                      {section.highlights?.length ? (
                        <ul className="list-none space-y-1 p-0">
                          {section.highlights.map((item) => (
                            <li key={item}>
                              <RichText text={item} />
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.paragraphs?.map((paragraph) => (
                        <Statement key={paragraph} text={paragraph} />
                      ))}
                    </StatementBody>
                  ) : null}
                  {section.access ? <AccessTable rows={section.access} /> : null}
                  {section.numbered ? (
                    <NumberedList
                      items={section.numbered}
                      layout={section.numberedLayout}
                    />
                  ) : null}
                  {section.stages ? (
                    <CurriculumStages stages={section.stages} />
                  ) : null}
                  {section.sources ? (
                    <SourceTable rows={section.sources} />
                  ) : null}
                  {section.measures ? (
                    <MeasureTable rows={section.measures} />
                  ) : null}
                  {section.pairs ? (
                    <PairTable
                      headers={section.pairs.headers}
                      rows={section.pairs.rows}
                    />
                  ) : null}
                  {section.closing?.length ? (
                    <div className="mt-stack">
                      <StatementBody scale={section.scale}>
                        {section.closing.map((paragraph) => (
                          <Statement key={paragraph} text={paragraph} />
                        ))}
                      </StatementBody>
                    </div>
                  ) : null}
                  {(section.links ?? (section.link ? [section.link] : [])).map(
                    (item) => (
                      <p key={item.href} className="mt-stack text-body">
                        <a
                          href={item.href}
                          className="underline underline-offset-2 hover:opacity-70"
                          {...(item.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          {item.label}
                        </a>
                      </p>
                    ),
                  )}
                </ContentRow>
              );
            })}
            </div>
          );
        })}

        <PageFooter />
      </div>
    </div>
  );
}
