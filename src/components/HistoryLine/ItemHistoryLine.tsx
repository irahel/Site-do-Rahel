interface ItemHistoryLineProps {
  title: string;
  span: string;
  details: string;
  _extraStyles?: string;
}

function ItemHistoryLine({
  title,
  span,
  details,
  _extraStyles,
}: ItemHistoryLineProps) {
  return (
    <article className={`flex flex-col items-start ${_extraStyles}`}>
      <h2 className="font-serif text-base font-bold text-dark">
        {title}
        <span className="font-normal"> {span} </span>
      </h2>
      <h3 className="font-serif text-xs font-normal">{details}</h3>
    </article>
  );
}

export default ItemHistoryLine;
