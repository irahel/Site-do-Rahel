import { useRef, useState } from "react";
import Tag from "./Tag";

interface CardProjectProps {
  id: number;
  ActualHoverCard: number;
  setFunction: Function;
  wside: string;
  isHoveringCard: boolean;
  setisHoveringCard: Function;
  stackIcon: any;
  stack: string;
  name: string;
  description: string;
  stacksBubbles: string[];
  bg_mini: string;
  bg_max: string;
}

function CardProject({
  id,
  ActualHoverCard,
  setFunction,
  stackIcon,
  stack,
  name,
  description,
  stacksBubbles,
  bg_mini,
  bg_max,
}: CardProjectProps) {
  const [bgMaxArrayIndex, setbgMaxArrayIndex] = useState(0);
  const refTimerBgCarrousel = useRef<number | null>(null);

  const startTimer = () => {
    if (refTimerBgCarrousel.current !== null) return;
    refTimerBgCarrousel.current = window.setTimeout(() => {
      console.log("UHUL");
    }, 1000);
  };

  const stopTimer = () => {
    if (refTimerBgCarrousel.current === null) return;
    window.clearTimeout(refTimerBgCarrousel.current);
    refTimerBgCarrousel.current = null;
  };
  return (
    <div
      className={`
      flex flex-col justify-between
      rounded-3xl
      h-[600px]
       bg-cover bg-no-repeat bg-center
      group
      ${ActualHoverCard == id ? `col-span-2 ${bg_max}` : bg_mini}
      `}
      onClick={() => {
        if (ActualHoverCard != id) {
          setFunction(id);
          startTimer();
        }
      }}
    >
      <h2
        className="flex flex-row items-center
        font-serif text-sm font-bold text-white gap-4 px-6 py-6 mb-56"
      >
        {stackIcon}
        {stack}
      </h2>

      <div className="bg-card-project pt-11 rounded-3xl justify-self-end">
        <div className="px-6">
          <h1 className="font-serif font-bold text-2xl text-white">{name}</h1>
          <h2
            className={`text-white font-serif font-normal text-base mt-4 leading-relaxed
            h-full
            line-clamp-3
            `}
          >
            {description}
          </h2>
        </div>
        <div
          className="flex flex-row items-start h-9
                      flex-wrap overflow-hidden
                    gap-3 ml-6 my-4"
        >
          {stacksBubbles.map((stack) => {
            return <Tag name={stack} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
