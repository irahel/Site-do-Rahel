interface ItemCardSkillProps {
  title: string;
  description: string;
}

function ItemCardSkill({ title, description }: ItemCardSkillProps) {
  return (
    <div className="flex flex-col items-center p-0 gap-2">
      <h1 className="text-dark font-serif font-bold text-base text-center leading-[160%]">
        {title}
      </h1>
      <h2 className="font-serif text-base text-dark font-normal text-center leading-[160%]">
        {description}
      </h2>
    </div>
  );
}

export default ItemCardSkill;
