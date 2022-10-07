import ItemCardSkill from "./ItemCardSkill";

interface CardSkillProps {
  icon: any;
  title: string;
  subTitle1: string;
  subDescription1: string;
  subTitle2: string;
  subDescription2: any;
  sub3?: boolean;
  subTitle3?: string;
  subDescription3?: any;
}

function CardSkill({
  icon,
  title,
  subTitle1,
  subDescription1,
  subTitle2,
  subDescription2,
  sub3 = false,
  subTitle3,
  subDescription3,
}: CardSkillProps) {
  return (
    <article className="flex flex-col items-center justify-center p-0 rounded-3xl h-full w-full">
      <div
        className="bg-dark flex flex-col items-center justify-center
                    p-4 gap-3
                    text-white font-serif font-bold
                    rounded-t-3xl
                    w-full h-full
                    leading-[160%]"
      >
        {icon}
        {title}
      </div>
      <div
        className="flex flex-col items-center py-6 px-4 gap-4
       bg-white rounded-b-3xl
       h-full w-full"
      >
        <ItemCardSkill title={subTitle1} description={subDescription1} />
        <ItemCardSkill title={subTitle2} description={subDescription2} />
        {sub3 && (
          <ItemCardSkill
            title={subTitle3 ?? ""}
            description={subDescription3}
          />
        )}
      </div>
    </article>
  );
}

export default CardSkill;
