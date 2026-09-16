import { AccessTable } from "@/components/Guide/AccessTable";
import { ContentRow } from "@/components/Guide/ContentRow";
import { CurriculumStages } from "@/components/Guide/CurriculumStages";
import { GroupBanner } from "@/components/Guide/GroupBanner";
import { Hero } from "@/components/Guide/Hero";
import { MeasureTable } from "@/components/Guide/MeasureTable";
import { NumberedList } from "@/components/Guide/NumberedList";
import { PageFooter } from "@/components/Guide/PageFooter";
import { PairTable } from "@/components/Guide/PairTable";
import { Sidebar } from "@/components/Guide/Sidebar";
import { SourceTable } from "@/components/Guide/SourceTable";
import { StatementBody } from "@/components/Guide/StatementBody";
import { sectionAnchor } from "@/content/Types";
import type { GuideGroup, GuideHero, SitePage } from "@/content/Types";

export function GuidePage({
  groups,
  hero,
  pages = [],
}: {
  groups: GuideGroup[];
  hero: GuideHero;
  pages?: SitePage[];
}) {
  return (
    <div className="min-h-dvh lg:flex">
      <Sidebar groups={groups} pages={pages} />
      <div className="content-canvas min-w-0 flex-1">
        <Hero {...hero} />

        {groups.map((group) => (
          <div key={group.id}>
            {group.heading ? (
              <GroupBanner id={group.id} heading={group.heading} />
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
                      {section.lede ? <p>{section.lede}</p> : null}
                      {section.highlights?.length ? (
                        <ul className="mt-[1em] list-none space-y-[0.35em] p-0">
                          {section.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
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
                    <div className="mt-10">
                      <StatementBody scale={section.scale}>
                        {section.closing.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </StatementBody>
                    </div>
                  ) : null}
                  {(section.links ?? (section.link ? [section.link] : [])).map(
                    (item) => (
                      <p key={item.href} className="mt-8 text-body-lg">
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
        ))}

        <PageFooter />
      </div>
    </div>
  );
}
