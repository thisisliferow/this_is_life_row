type MediaSlotProps = {
  label: string;
  lookingFor: string;
};

export function MediaSlot({ label, lookingFor }: MediaSlotProps) {
  return (
    <figure className="media-slot">
      <div className="media-slot-frame">
        <p className="media-slot-kicker">Documentary slot</p>
        <p className="media-slot-title">{label}</p>
        <p className="media-slot-note">{lookingFor}</p>
      </div>
      <figcaption>
        Replaceable editorial slot. Authentic quotes and approved identification
        only — playback stays user-controlled when media is added.
      </figcaption>
    </figure>
  );
}
