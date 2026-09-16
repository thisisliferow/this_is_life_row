import type { NumberedItem } from "@/content";

export function NumberedList({
  items,
  layout = "display",
}: {
  items: NumberedItem[];
  layout?: "display" | "stack";
}) {
  if (layout === "stack") {
    return (
      <ol className="mt-10 m-0 list-none space-y-10 p-0 lg:space-y-[4.4cqw]">
        {items.map((item) => (
          <li
            key={item.heading}
            id={item.id}
            className="max-w-[822px] scroll-mt-6 lg:max-w-[69.6cqw]"
          >
            <h4 className="text-statement-sm font-normal">{item.heading}</h4>
            <p className="mt-3 text-body-lg">{item.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="mt-10 m-0 list-none space-y-20 p-0 lg:space-y-[9.3cqw]">
      {items.map((item, index) => (
        <li
          key={item.heading}
          id={item.id}
          className="scroll-mt-6 lg:grid lg:grid-cols-[23.77cqw_1fr]"
        >
          <span aria-hidden="true" className="block text-statement-md font-normal">
            {index + 1}.
          </span>
          <div className="mt-3 lg:mt-0">
            <h4 className="text-statement-md font-normal">{item.heading}</h4>
            <div className="mt-6 max-w-[822px] text-body-lg lg:max-w-[69.6cqw]">
              <p>{item.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
