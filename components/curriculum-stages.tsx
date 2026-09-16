import { curriculumStages } from "@/lib/content";

export function CurriculumStages() {
  return (
    <ol className="stage-list">
      {curriculumStages.map((stage) => (
        <li key={stage.number} className="stage-row">
          <div className="stage-index" aria-hidden="true">
            {stage.number}
          </div>
          <div className="stage-body">
            <h3 className="stage-name">{stage.name}</h3>
            <ul className="stage-principles">
              {stage.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <p className="stage-thread">Ask God for wisdom.</p>
            <details className="stage-details">
              <summary>Proposed practice and progress conversation</summary>
              <div className="stage-details-body">
                <p>
                  <strong>Proposed practice.</strong> {stage.practice}
                </p>
                <p>
                  <strong>Evidence to discuss at a progress review.</strong>{" "}
                  {stage.evidence}
                </p>
                <p className="stage-disclaimer">
                  These are proposed curriculum stages, not a finalized clinical
                  model, fixed schedule, or published graduation requirement.
                </p>
              </div>
            </details>
          </div>
        </li>
      ))}
    </ol>
  );
}
