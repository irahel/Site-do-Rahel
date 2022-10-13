import TitleSection from "../components/TitleSection";
import { ChalkboardTeacher, Code, GameController } from "phosphor-react";
import CardSkill from "../components/CardSkill/CardSkill";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-blue px-[15%] py-32 gap-24"
    >
      <TitleSection title="Habilidades" />
      <div className="flex flex-row items-start p-0 gap-6 columns-3">
        <CardSkill
          icon={<ChalkboardTeacher size={32} />}
          title={"Instrutor de computação"}
          subTitle1={"Experiência ensinando:"}
          subDescription1={
            "Python, Java, C#, Programação Basica, Redes de computador, Segurança da informação, Sistemas distribuídos e Engenharia de Software"
          }
          subTitle2={"Alguns números interessantes:"}
          subDescription2={
            <>
              <p>+3 anos ensinando</p>
              <p>+1500 horas de aula</p>
              <p>+20 turmas como instrutor</p>
              <p>+1000 estudantes impactados</p>
            </>
          }
        />
        <CardSkill
          icon={<Code size={32} />}
          title={"Desenvolvedor"}
          subTitle1={"Linguagens que mais domino:"}
          subDescription1={"Python, C#, HTML, CSS, JavaScript e TypeScript"}
          subTitle2={"Ferramentas de desenvolvimento:"}
          subDescription2={
            <>
              <p>React</p>
              <p>Node.js</p>
              <p>Tailwind</p>
              <p>ASP.NET</p>
              <p>Django</p>
              <a href="https://youtu.be/bjwgt1kRqEU?t=82">Beteram</a>
            </>
          }
        />
        <CardSkill
          icon={<GameController size={32} />}
          title={"Game programmer"}
          subTitle1={"Linguagens que eu utilizo:"}
          subDescription1={"C#, Python, Lua e C"}
          subTitle2={"Ferramentas de desenvolvimento:"}
          subDescription2={
            <>
              <p>Unity</p>
              <p>openGL</p>
            </>
          }
          sub3={true}
          subTitle3={"Jogos favoritos:"}
          subDescription3={
            <>
              <p>Skyrim</p>
              <p>Diablo III</p>
              <p>Plants vs Zombies</p>
            </>
          }
        />
      </div>
    </section>
  );
}

export default Skills;
