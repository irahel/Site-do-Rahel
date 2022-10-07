import { TypeAnimation } from "react-type-animation";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import ItemHistoryLineProps from "./components/ItemHistoryLine";
import TitleHistoryLine from "./components/TitleHistoryLine";

function App() {
  return (
    <>
      <section className="pt-11 bg-dark h-screen flex flex-col justify-between px-[15%]">
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
                    1000, // Waits 1s
                    "desenvolvedor front-end",
                    1000, // Waits 2s
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
            src="/avatar.png"
            alt="Rahel's avatar"
            className="h-[420px] w-[420px] rounded-full bg-blue"
          />
        </div>
        <Scroll />
      </section>
      <section className="bg-white px-[15%] py-32">
        <section className="flex flex-row items-start gap-10 p-0 columns-2">
          <div className="h-full w-full flex flex-col items-start gap-9">
            <TitleHistoryLine title="Experiência" />
            {/* STAAAAAAAAAAAAAAAR HISTORY LINE*/}
            <ol className="border-l-2 border-blue mt-2">
              <li>
                <div className="flex flex-start items-center">
                  <div className="bg-blue w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-6"></div>
                  <ItemHistoryLineProps
                    title="Pessoa Instrutora de Ciência da Computação"
                    span="| Trybe"
                    details="Out de 2021 - Atual"
                    _extraStyles="-mt-2"
                  />
                </div>
              </li>
              <li>
                <div className="flex flex-start items-center mt-11">
                  <div className="bg-blue w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                  <ItemHistoryLineProps
                    title="Prof. Magistério Superior"
                    span="| Faculdade Paraíso do Ceará"
                    details="Fev de 2021 - Dez de 2021"
                  />
                </div>
              </li>
              <li>
                <div className="flex flex-start items-center mt-5">
                  <div className="bg-blue w-4 h-4 flex rounded-full -ml-2 mr-3 mt-12"></div>
                  <ItemHistoryLineProps
                    title="Prof. Substituto"
                    span="| Universidade Federal do Ceará"
                    details="Set de 2020 - Out de 2021"
                    _extraStyles="mt-6"
                  />
                </div>
              </li>
            </ol>
            {/* EEEEEEEEEEEEND HISTORY LINE*/}
          </div>
          <div className="h-full w-full flex flex-col items-start gap-9">
            <TitleHistoryLine title="Educação" />
            <ol className="border-l-2 border-blue mt-2">
              <li>
                <div className="flex flex-start items-center">
                  <div className="bg-blue w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-6"></div>
                  <ItemHistoryLineProps
                    title="Mestrado"
                    span="| Redes de Computadores"
                    details="Universidade Federal do Ceará • 2019 - 2020"
                    _extraStyles="-mt-2"
                  />
                </div>
              </li>
              <li>
                <div className="flex flex-start items-center mt-5">
                  <div className="bg-blue w-4 h-4 flex rounded-full -ml-2 mr-3 mt-12"></div>
                  <ItemHistoryLineProps
                    title="Graduação"
                    span="| Ciência da Computação"
                    details="Universidade Federal do Ceará • 2015 - 2018"
                    _extraStyles="mt-6"
                  />
                </div>
              </li>
            </ol>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
