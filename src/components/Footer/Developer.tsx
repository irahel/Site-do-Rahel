interface DeveloperProps {
  logoLink?: string;
  logoDescription?: string;
  name: any;
}

function Developer({ logoLink, logoDescription, name }: DeveloperProps) {
  return (
    <span className="flex flex-row">
      {logoLink && <img className="h-6" src={logoLink} alt={logoDescription} />}
      <h2 className="text-white text-bold font-medium text-center font-serif pl-2">
        {name}
      </h2>
    </span>
  );
}

export default Developer;
