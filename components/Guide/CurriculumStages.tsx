import type { CurriculumStage } from "@/content";

export function CurriculumStages({ stages }: { stages: CurriculumStage[] }) {
  return (
    <ol className="mt-stack m-0 flex list-none flex-col gap-item-loose p-0">
      {stages.map((stage, index) => (
        <li key={stage.heading} className="grid-aside">
          <span aria-hidden="true" className="block text-heading">
            {index + 1}.
          </span>
          <div>
            <h4 className="text-heading">{stage.heading}</h4>
            {stage.principles.length ? (
              <ul className="mt-heading list-none space-y-1 p-0 text-body">
                {stage.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            ) : null}
            {stage.resources.length ? (
              <p className="mt-[var(--space-5)] text-caption text-muted">
                {stage.resources.join(" · ")}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
