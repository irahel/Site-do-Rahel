import { handleClick } from "../Utils";

interface socialButtonProps {
  icon: any;
  link: string;
  name: string;
}

function socialButton({ icon, link, name }: socialButtonProps) {
  return (
    <button
      name={name}
      className="h-12 w-12 rounded-xl bg-dark flex items-center justify-center"
      onClick={() => handleClick(link)}
    >
      {icon}
    </button>
  );
}

export default socialButton;
