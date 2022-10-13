import { Link } from "react-scroll";
import Selection from "../Selection";
interface NavItemProps {
  title: string;
  id: number;
  navTo: string;
  isSelected: number;
  setIsSelected: Function;
}

function NavItem({
  title,
  id,
  navTo,
  isSelected,
  setIsSelected,
}: NavItemProps) {
  const { innerWidth: width, innerHeight: height } = window;
  const elementHeight = document.getElementById(navTo)?.clientHeight ?? 0;

  const scrollOffset =
    elementHeight < innerHeight ? innerHeight / 2 - elementHeight / 2 : 0;

  return (
    <nav
      className="flex flex-col items-center"
      onMouseEnter={() => {
        setIsSelected(id);
      }}
    >
      <Link to={navTo} spy={true} smooth={true} offset={-scrollOffset}>
        {title} {isSelected == id && <Selection />}
      </Link>
    </nav>
  );
}

export default NavItem;
