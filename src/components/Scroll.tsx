import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

function Scroll() {
  return (
    <div className="relative bottom-24 self-center h-11 items-center">
      <UseAnimations animation={arrowDown} size={56} strokeColor="#F7F7F7" />
    </div>
  );
}

export default Scroll;
