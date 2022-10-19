import TitleSection from "../components/TitleSection";
import CardProject from "../components/CardProject/CardProject";
import { Desktop, DesktopTower, GameController } from "phosphor-react";
import { useRef, useState } from "react";

function Projects() {
  const [ActualHoverCard, setActualHoverCard] = useState(0);
  const [isHoveringCard, setisHoveringCard] = useState(false);

  const refTimer = useRef<number | null>(null);

  const startTimer = () => {
    if (refTimer.current !== null) return;
    refTimer.current = window.setTimeout(() => {
      setActualHoverCard(0);
    }, 1000);
  };

  const stopTimer = () => {
    if (refTimer.current === null) return;
    window.clearTimeout(refTimer.current);
    refTimer.current = null;
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center bg-white
      px-8 py-10 gap-10
      md:px-[15%] md:pt-32 md:pb-64 md:gap-24"
      onClick={() => {
        if (!isHoveringCard) {
          setActualHoverCard(0);
        }
      }}
    >
      <TitleSection title={"Projetos"} />
      <div
        className={`grid gap-5
        grid-flow-col grid-rows-4
        md:grid-flow-row md:grid-cols-4 md:grid-rows-1`}
        onMouseEnter={() => {
          stopTimer();
          setisHoveringCard(true);
        }}
        onMouseLeave={() => {
          startTimer();
          setisHoveringCard(false);
        }}
      >
        {ActualHoverCard != 4 && ActualHoverCard != 3 && (
          <CardProject
            id={1}
            ActualHoverCard={ActualHoverCard}
            setFunction={setActualHoverCard}
            wside={ActualHoverCard == 1 ? "2/4" : "1/4"}
            setisHoveringCard={setisHoveringCard}
            isHoveringCard={isHoveringCard}
            stack={"Jogo de Plataforma"}
            name={"Neide"}
            description={
              "Neide: A ascensão da princesa índia” é um jogo de plataforma 2D no estilo “Side scrolling”, que narra a história de uma princesa em sua jornada para resgatar outra princesa das garras de um poderoso xamã."
            }
            bg_mini={"bg-neide-mini"}
            bg_max={"bg-neide-max-1"}
            stackIcon={<GameController size={24} />}
            stacksBubbles={["Unity", "C#"]}
          />
        )}
        <CardProject
          id={2}
          ActualHoverCard={ActualHoverCard}
          setFunction={setActualHoverCard}
          wside={ActualHoverCard == 2 ? "2/4" : "1/4"}
          setisHoveringCard={setisHoveringCard}
          isHoveringCard={isHoveringCard}
          stack={"Front-End"}
          name={"Github Evaluator"}
          description={
            "Front-end em ReactJS para avaliar um perfil de usuário do GitHub em 10 critérios e atribui uma nota a ele."
          }
          bg_mini={"bg-trybe-mini"}
          bg_max={"bg-trybe-max"}
          stackIcon={<Desktop size={24} />}
          stacksBubbles={["ReactJS", "TypeScript", "Tailwind"]}
        />
        <CardProject
          id={3}
          ActualHoverCard={ActualHoverCard}
          setFunction={setActualHoverCard}
          wside={ActualHoverCard == 3 ? "2/4" : "1/4"}
          setisHoveringCard={setisHoveringCard}
          isHoveringCard={isHoveringCard}
          stack={"Full-Stack"}
          name={"Duo Finder"}
          description={
            "Uma plataforma onde você pode buscar uma dupla para um jogo específico ou criar um novo anúncio com seu usuário do discord."
          }
          bg_mini={"bg-esports-mini"}
          bg_max={"bg-esports-max"}
          stackIcon={<DesktopTower size={24} />}
          stacksBubbles={["ReactJS", "ReactNative", "NodeJS"]}
        />
        {ActualHoverCard != 1 && ActualHoverCard != 2 && (
          <CardProject
            id={4}
            ActualHoverCard={ActualHoverCard}
            setFunction={setActualHoverCard}
            wside={ActualHoverCard == 4 ? "2/4" : "1/4"}
            setisHoveringCard={setisHoveringCard}
            isHoveringCard={isHoveringCard}
            stack={"Front-End"}
            name={"Visual Coding"}
            description={
              "Reúne ideias aleatórias, implementando codificação visual com texto TS nativo e encapsulado por react."
            }
            bg_mini={"bg-vc-mini"}
            bg_max={"bg-vc-max"}
            stackIcon={<Desktop size={24} />}
            stacksBubbles={["ReactJS", "CanvasSketch"]}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
