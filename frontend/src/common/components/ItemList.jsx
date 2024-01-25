export function ItemList({ items }) {
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-3">
      {items.map((i, index) => (
        <div
          key={index}
          className="text-title-2 flex w-full flex-col items-center justify-between md:flex-row"
        >
          <span className="w-full font-medium">{i.title}</span>
          <span className="w-full text-neutral-500 md:text-right">
            {i.description}
          </span>
          {i.label ? (
            <span className="w-full md:text-right">{i.label}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
