import Image from "next/image";
import { ExternalTextLink } from "@/components/Guide/ExternalTextLink";
import { RichText } from "@/components/Guide/RichText";
import type { NumberedItem } from "@/content";

function ItemHeading({ item }: { item: NumberedItem }) {
  if (!item.href) return item.heading;

  if (item.external) {
    return (
      <ExternalTextLink href={item.href}>{item.heading}</ExternalTextLink>
    );
  }

  return (
    <a
      href={item.href}
      className="underline underline-offset-2 hover:opacity-70"
    >
      {item.heading}
    </a>
  );
}

function Points({
  points,
  padded,
}: {
  points: NonNullable<NumberedItem["points"]>;
  padded: boolean;
}) {
  return (
    <ul
      className={`m-0 list-none p-0 text-body ${padded ? "mt-stack" : "mt-heading"}`}
    >
      {points.map((point) => (
        <li
          key={point.access}
          className="cell border-b border-line first:border-t first:border-line-strong"
        >
          <div className="grid-label">
            <p className="font-medium">{point.access}</p>
            <p className="mt-1 lg:mt-0">{point.possible}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({
  items,
  layout = "display",
}: {
  items: NumberedItem[];
  layout?: "display" | "stack";
}) {
  const withImages = items.some((item) => item.image);

  if (layout === "stack" && withImages) {
    return (
      <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
        {items.map((item) => (
          <li
            key={item.heading}
            id={item.id}
            className="scroll-mt-12 lg:scroll-mt-6"
          >
            {item.image ? (
              <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-ink">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 64rem) 28vw, (min-width: 40rem) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <h4 className="text-heading">
              <ItemHeading item={item} />
            </h4>
            {item.body ? (
              <p className="mt-heading rich-accent text-body">
                <RichText text={item.body} />
              </p>
            ) : null}
            {item.points?.length ? (
              <Points points={item.points} padded={Boolean(item.body)} />
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  if (layout === "stack") {
    return (
      <ol className="m-0 flex list-none flex-col gap-10 p-0">
        {items.map((item) => (
          <li
            key={item.heading}
            id={item.id}
            className="max-w-measure scroll-mt-12 lg:scroll-mt-6"
          >
            <h4 className="text-heading">
              <ItemHeading item={item} />
            </h4>
            {item.body ? (
              <p className="mt-heading rich-accent text-body">
                <RichText text={item.body} />
              </p>
            ) : null}
            {item.points?.length ? (
              <Points points={item.points} padded={Boolean(item.body)} />
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="m-0 flex max-w-measure list-none flex-col gap-10 p-0">
      {items.map((item, index) => (
        <li
          key={item.heading}
          id={item.id}
          className="scroll-mt-12 lg:scroll-mt-6"
        >
          <p className="text-label text-muted">{index + 1}.</p>
          <h4 className="mt-2 text-heading">
            <ItemHeading item={item} />
          </h4>
          {item.body ? (
            <p className="mt-heading rich-accent text-body">
              <RichText text={item.body} />
            </p>
          ) : null}
          {item.points?.length ? (
            <Points points={item.points} padded={Boolean(item.body)} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
