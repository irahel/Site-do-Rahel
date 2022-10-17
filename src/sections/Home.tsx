import { TypeAnimation } from "react-type-animation";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

function Home() {
  return (
    <section
      id="home"
      className="pt-11 bg-dark h-screen flex flex-col justify-between px-[15%]"
    >
      <Header />
      <div className="flex flex-row items-center pb-32 gap-24">
        <article className="text-white flex flex-col w-full">
          <h1 className="text-6xl font-serif font-normal">
            Olá, meu
            <p>
              nome é <span className="font-bold text-blue">RAHEL!</span>
            </p>
          </h1>
          <h2 className="text-2xl font-normal mt-2">
            Sou{" "}
            <span className="text-blue">
              <TypeAnimation
                sequence={[
                  "instrutor de ciência da computação",
                  1000,
                  "desenvolvedor front-end",
                  1000,
                  "game programmer",
                  1000,
                  () => {},
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>
          <h3 className="text-base font-normal mt-8">
            Desenvolvedor Front-end com ReactJs, Game Programmer utilizando a
            Unity e Instrutor de Ciência da Computação na Trybe. Já atuei como
            professor na Universidade Federal do Ceará (UFC) e na Faculdade
            Paraíso do Ceará (FAP).
          </h3>
        </article>
        <img
          src="https://github.com/irahel/Site-do-Rahel/blob/main/public/img/avatar.png?raw=true?nf_resize=fit&w=420"
          loading="lazy"
          alt="Rahel's avatar"
          className="h-[420px] w-[420px] rounded-full bg-blue"
        />
      </div>
      <Scroll />
    </section>
  );
}

export default Home;
