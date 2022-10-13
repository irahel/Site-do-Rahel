import { Link } from "react-scroll";
import Selection from "../Selection";
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
  const { innerHeight: height } = window;
  const elementHeight = document.getElementById(navTo)?.clientHeight ?? 0;

  const scrollOffset =
    elementHeight < innerHeight ? innerHeight / 2 - elementHeight / 2 : 0;

  let SelectionAppear = false;
  if (isOver == 0) {
    if (isSelected == id) SelectionAppear = true;
  } else if (isOver == id) SelectionAppear = true;

  return (
    <nav
      className="flex flex-col items-center"
      onMouseEnter={() => {
        setIsOver(id);
      }}
    >
      <Link
        to={navTo}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-scrollOffset}
        onClick={() => {
          console.log("AIIIIN DA UMA CHAMADINHA");
          setIsSelected(id);
        }}
      >
        {title} {SelectionAppear && <Selection />}
      </Link>
    </nav>
  );
}

export default NavItem;
