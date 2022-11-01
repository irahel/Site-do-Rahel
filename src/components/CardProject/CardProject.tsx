import { ArrowRight } from "phosphor-react";
import { useRef } from "react";
import { handleClick } from "../Utils";
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
  projectLink: string;
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
  projectLink,
}: CardProjectProps) {
  const { innerWidth: width } = window;
  const refTimerBgCarrousel = useRef<number | null>(null);

  const startTimer = () => {
    if (refTimerBgCarrousel.current !== null) return;
    refTimerBgCarrousel.current = window.setTimeout(() => {
      console.log("UHUL");
    }, 1000);
  };

  const isActive = ActualHoverCard == id;

  return (
    <div
      className={`
      flex flex-col justify-between
      rounded-3xl
      h-[600px]
      bg-cover bg-no-repeat bg-center
      group
      ${isActive ? `col-span-2 ${bg_max}` : bg_mini}
      `}
      onClick={() => {
        if (!isActive && width > 768) {
          setFunction(id);
          startTimer();
        }
      }}
      role={`${width > 768 && `button`}`}
    >
      <div
        className={` flex flex-col justify-between rounded-3xl
        h-full
        ${!isActive && width > 768 && `group-hover:bg-card-project-hover`}
      `}
      >
        <h2
          className="flex flex-row items-center
        font-serif text-sm font-bold text-white gap-4 px-6 py-6 mb-56"
        >
          {stackIcon}
          {stack}
        </h2>
        {!isActive && (
          <h2
            className={`text-white font-serif font-bold text-base items-center justify-center
          self-center
          hidden h-full -translate-y-1/2
          border-dashed border-4
          p-4
          ${width > 768 && `group-hover:flex`}
          `}
          >
            Mais informações
          </h2>
        )}

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
                     mx-6 my-4
                     justify-between"
          >
            <div className="flex flex-row gap-3 items-start h-9 overflow-hidden flex-wrap">
              {stacksBubbles.map((stack) => {
                return <Tag name={stack} key={stack} />;
              })}
            </div>

            {isActive && (
              <div
                className="flex flex-row items-center self-center"
                onClick={() => handleClick(projectLink)}
              >
                <h2
                  className="font-serif text-sm font-bold leading-7 text-white
                hover:text-blue"
                >
                  Ver projeto
                </h2>
                <ArrowRight color="#FAFAFA" size={24} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
