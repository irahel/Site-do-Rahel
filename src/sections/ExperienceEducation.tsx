import BulletHistoryLine from "../components/HistoryLine/BulletHistoryLine";
import ItemHistoryLineProps from "../components/HistoryLine/ItemHistoryLine";
import TitleHistoryLine from "../components/HistoryLine/TitleHistoryLine";

function ExperienceEducation() {
  return (
    <section
      id="education"
      className="bg-white
      px-8 py-10
      md:px-[15%] md:py-32"
    >
      <section
        className="flex items-start gap-10 p-0 columns-2
      flex-col
      md:flex-row"
      >
        <div className="h-full w-full flex flex-col items-start gap-9">
          <TitleHistoryLine title="Experiência" />
          <ol className="border-l-2 border-blue mt-2">
            <li>
              <div className="flex flex-start items-center">
                <BulletHistoryLine _extraStyles="-mt-8" />
                <ItemHistoryLineProps
                  title="Pessoa Instrutora de Ciência da Computação"
                  span="| Trybe"
                  details="Out de 2021 - Atual"
                  _extraStyles="-mt-8 md:-mt-2"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center mt-11">
                <BulletHistoryLine _extraStyles="-mt-2" />
                <ItemHistoryLineProps
                  title="Prof. Magistério Superior"
                  span="| Faculdade Paraíso do Ceará"
                  details="Fev de 2021 - Dez de 2021"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center mt-5">
                <BulletHistoryLine _extraStyles="mt-12" />
                <ItemHistoryLineProps
                  title="Prof. Substituto"
                  span="| Universidade Federal do Ceará"
                  details="Set de 2020 - Out de 2021"
                  _extraStyles="md:mt-6"
                />
              </div>
            </li>
          </ol>
        </div>
        <div className="h-full w-full flex flex-col items-start gap-9">
          <TitleHistoryLine title="Educação" />
          <ol className="border-l-2 border-blue mt-2">
            <li>
              <div className="flex flex-start items-center">
                <BulletHistoryLine _extraStyles="-mt-6" />
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
                <BulletHistoryLine _extraStyles="mt-12" />
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
  );
}

export default ExperienceEducation;
