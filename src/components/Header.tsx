import { useEffect, useState } from "react";
import NavItem from "./Header/NavItem";

function Header() {
  const [overItem, setOverItem] = useState(0);
  const [selectedItem, setSelectedItem] = useState(1);
  const [sticky, setSticky] = useState(false);

  const { innerHeight: height } = window;
  const element1Home = document.getElementById("home")?.clientHeight ?? 0;
  const element2Education =
    document.getElementById("education")?.clientHeight ?? 0;
  const element3Skills = document.getElementById("skills")?.clientHeight ?? 0;
  const element4Projects =
    document.getElementById("projects")?.clientHeight ?? 0;
  const element5Contact =
    document.getElementById("contacts")?.clientHeight ?? 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setSticky(true);
      else setSticky(false);

      let acumullate = element1Home;
      const offsetScrollClick = 5;
      let scrollPoint = window.scrollY + height / 2 + offsetScrollClick;
      if (scrollPoint < acumullate + element2Education / 2) {
        setSelectedItem(1);
        return;
      }

      acumullate += element2Education;
      if (scrollPoint < acumullate + element3Skills / 2) {
        setSelectedItem(2);
        return;
      }

      acumullate += element3Skills;
      if (scrollPoint < acumullate + element4Projects / 3) {
        setSelectedItem(3);
        return;
      }

      acumullate += element4Projects;
      if (scrollPoint < acumullate + element5Contact) {
        setSelectedItem(4);
        return;
      }
      setSelectedItem(5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {sticky && <div className="bg-dark h-11" />}
      <header
        className={`bg-dark text-white h-11 z-50
      ${
        sticky &&
        "fixed rounded-2xl px-8 py-6 h-fit w-fit self-center shadow-header"
      }`}
      >
        <div className="flex justify-between items-center">
          {!sticky && (
            <h2 className="text-2xl font-extrabold">
              RAHEL
              <span className="font-extralight"> MARTIM</span>
            </h2>
          )}

          <div
            className="flex gap-8"
            onMouseLeave={() => {
              setOverItem(0);
            }}
          >
            <NavItem
              title={"Início"}
              navTo={"home"}
              id={1}
              isSelected={selectedItem}
              setIsSelected={setSelectedItem}
              isOver={overItem}
              setIsOver={setOverItem}
            />
            <NavItem
              title={"Formação"}
              navTo={"education"}
              id={2}
              isSelected={selectedItem}
              setIsSelected={setSelectedItem}
              isOver={overItem}
              setIsOver={setOverItem}
            />
            <NavItem
              title={"Habilidades"}
              navTo={"skills"}
              id={3}
              isSelected={selectedItem}
              setIsSelected={setSelectedItem}
              isOver={overItem}
              setIsOver={setOverItem}
            />
            <NavItem
              title={"Projetos"}
              navTo={"projects"}
              id={4}
              isSelected={selectedItem}
              setIsSelected={setSelectedItem}
              isOver={overItem}
              setIsOver={setOverItem}
            />
            <NavItem
              title={"Contatos"}
              navTo={"contacts"}
              id={5}
              isSelected={selectedItem}
              setIsSelected={setSelectedItem}
              isOver={overItem}
              setIsOver={setOverItem}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
