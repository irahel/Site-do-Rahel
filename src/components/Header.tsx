import { useState } from "react";
import NavItem from "./Header/NavItem";

function Header() {
  const [overItem, setoverItem] = useState(1);
  const [sticky, setSticky] = useState(true);

  return (
    <>
      <header
        className={`bg-dark text-white h-11
      ${sticky && "fixed rounded-2xl"}`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold">
            RAHEL
            <span className="font-extralight"> MARTIM</span>
          </h2>
          <div
            className="flex gap-8"
            onMouseLeave={() => {
              setoverItem(1);
            }}
          >
            <NavItem
              title={"Home"}
              navTo={"home"}
              isSelected={overItem}
              id={1}
              setIsSelected={setoverItem}
            />
            <NavItem
              title={"Formação"}
              navTo={"education"}
              isSelected={overItem}
              id={2}
              setIsSelected={setoverItem}
            />
            <NavItem
              title={"Habilidades"}
              navTo={"skills"}
              isSelected={overItem}
              id={3}
              setIsSelected={setoverItem}
            />
            <NavItem
              title={"Projetos"}
              navTo={"projects"}
              isSelected={overItem}
              id={4}
              setIsSelected={setoverItem}
            />
            <NavItem
              title={"Contatos"}
              navTo={"contacts"}
              isSelected={overItem}
              id={5}
              setIsSelected={setoverItem}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
