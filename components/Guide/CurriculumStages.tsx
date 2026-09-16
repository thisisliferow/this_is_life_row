import type { CurriculumStage } from "@/content";

export function CurriculumStages({ stages }: { stages: CurriculumStage[] }) {
  return (
    <ol className="m-0 list-none space-y-20 p-0 lg:space-y-[9.3cqw]">
      {stages.map((stage, index) => (
        <li key={stage.heading} className="lg:grid lg:grid-cols-[23.77cqw_1fr]">
          <span aria-hidden="true" className="block text-statement-md font-normal">
            {index + 1}.
          </span>
          <div className="mt-3 lg:mt-0">
            <h4 className="text-statement-md font-normal">{stage.heading}</h4>
            <ul className="mt-4 list-none space-y-1 p-0 text-body-lg">
              {stage.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p className="mt-5 text-caption text-[#444]">
              {stage.resources.join(" · ")}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
