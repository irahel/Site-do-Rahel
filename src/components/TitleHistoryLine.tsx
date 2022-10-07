interface TitleHistoryLineProps {
  title: string;
}

function TitleHistoryLine({ title }: TitleHistoryLineProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-dark font-serif font-bold text-4xl ">{title}</h1>
      <div className="bg-dark w-24 h-1 rounded-full" />
    </div>
  );
}

export default TitleHistoryLine;
