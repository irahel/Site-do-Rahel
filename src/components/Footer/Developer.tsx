import { handleClick } from "../Utils";

interface DeveloperProps {
  logoLink?: string;
  logoDescription?: string;
  name: any;
  link: string;
}

function Developer({ logoLink, logoDescription, name, link }: DeveloperProps) {
  return (
    <span
      className="flex flex-row cursor-pointer"
      onClick={() => handleClick(link)}
      role="button"
    >
      {logoLink && <img className="h-6" src={logoLink} alt={logoDescription} />}
      <h2
        className="text-white text-bold font-medium text-center font-serif pl-2
      hidden
      md:flex"
      >
        {name}
      </h2>
    </span>
  );
}

export default Developer;
