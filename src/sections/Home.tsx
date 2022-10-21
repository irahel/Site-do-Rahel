import { TypeAnimation } from "react-type-animation";
import Header from "../components/Header/Header";
import Scroll from "../components/Scroll";

function Home() {
  return (
    <section
      id="home"
      className="pt-11 bg-dark h-screen flex flex-col justify-between
      px-8
      md:px-[15%]"
    >
      <Header />
      <div
        className="flex flex-row items-center gap-24
      pb-10
      md:pb-32 "
      >
        <article className="text-white flex flex-col w-full">
          <h1 className="text-6xl font-serif font-normal">
            Olá, meu
            <p>
              nome é <span className="font-bold text-blue">RAHEL!</span>
            </p>
          </h1>
          <h2
            className="text-2xl font-normal mt-2
          hidden
          md:block"
          >
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
          <h3 className="text-base font-normal mt-8 leading-7">
            Desenvolvedor Front-end com ReactJs, Game Programmer utilizando a
            Unity e Instrutor de Ciência da Computação na Trybe. Já atuei como
            professor na Universidade Federal do Ceará (UFC) e na Faculdade
            Paraíso do Ceará (FAP).
          </h3>
        </article>
        <img
          src="./img/avatar.png"
          alt="Rahel's avatar"
          className="max-h-[420px] max-w-[420px] rounded-full bg-blue 
          hidden md:block"
        />
      </div>
      <Scroll />
    </section>
  );
}

export default Home;
