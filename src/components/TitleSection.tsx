interface TitleSectionProps {
  title: string;
}

function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 flex-none order-0 grow-0">
      <h1 className="text-dark font-serif font-bold text-4xl ">{title}</h1>
      <div className="bg-dark w-24 h-1 rounded-full" />
    </div>
  );
}

export default TitleSection;
