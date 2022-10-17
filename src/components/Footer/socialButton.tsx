interface socialButtonProps {
  icon: any;
  link: string;
}

function socialButton({ icon, link }: socialButtonProps) {
  const handleClickButton = () => {
    window.open(link);
  };
  return (
    <button
      className="h-12 w-12 rounded-xl bg-dark flex items-center justify-center"
      onClick={handleClickButton}
    >
      {icon}
    </button>
  );
}

export default socialButton;
