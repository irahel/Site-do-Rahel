import Selection from "./Selection";

function Header() {
  return (
    <header className="text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold">
          RAHEL
          <span className="font-extralight"> MARTIM</span>
        </h2>
        <div className="flex gap-8">
          <nav className="flex flex-col items-center">
            Home <Selection />
          </nav>
          <nav>Formação</nav>
          <nav>Habilidades</nav>
          <nav>Projetos</nav>
          <nav>Contatos</nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
