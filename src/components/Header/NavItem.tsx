import { Link } from "react-scroll";
import SelectionItem from "./Selection";
import HoverItem from "./HoverItem";
interface NavItemProps {
  title: string;
  id: number;
  navTo: string;
  isSelected: number;
  setIsSelected: Function;
  isOver: number;
  setIsOver: Function;
}

function NavItem({
  title,
  id,
  navTo,
  isSelected,
  setIsSelected,
  isOver,
  setIsOver,
}: NavItemProps) {
  const { innerHeight } = window;
  const elementHeight = document.getElementById(navTo)?.clientHeight ?? 0;

  const scrollOffset =
    elementHeight < innerHeight ? innerHeight / 2 - elementHeight / 2 : 0;

  const isOverMe = isOver == id;
  const isSelectedMe = isSelected == id;

  return (
    <nav
      className="flex flex-col items-center"
      onMouseEnter={() => {
        setIsOver(id);
      }}
    >
      <Link
        className={`${
          isOverMe ? "text-blue" : "text-white"
        } flex flex-col items-center justify-center`}
        name={"Navegação para " + title}
        to={navTo}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-scrollOffset}
        onClick={() => {
          setIsSelected(id);
        }}
        role="button"
      >
        {title} {isSelectedMe ? <SelectionItem /> : isOverMe && <HoverItem />}
      </Link>
    </nav>
  );
}

export default NavItem;
