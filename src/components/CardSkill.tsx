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
        <div className="flex flex-col items-center p-0 gap-2">
          <h1 className="text-dark font-serif font-bold text-base text-center leading-[160%]">
            {subTitle1}
          </h1>
          <h2 className="font-serif text-base text-dark font-normal text-center leading-[160%]">
            {subDescription1}
          </h2>
        </div>
        <div className="flex flex-col items-center p-0 gap-2">
          <h1 className="text-dark font-serif font-bold text-base text-center leading-[160%]">
            {subTitle2}
          </h1>
          <h2 className="font-serif text-base text-dark font-normal text-center leading-[160%]">
            {subDescription2}
          </h2>
        </div>
        {sub3 && (
          <div className="flex flex-col items-center p-0 gap-2">
            <h1 className="text-dark font-serif font-bold text-base text-center leading-[160%]">
              {subTitle3}
            </h1>
            <h2 className="font-serif text-base text-dark font-normal text-center leading-[160%]">
              {subDescription3}
            </h2>
          </div>
        )}
      </div>
    </article>
  );
}

export default CardSkill;
