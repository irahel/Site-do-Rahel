function Scroll() {
  return (
    <div className="relative bottom-24 self-center opacity-40">
      <span
        className="block relative h-12 w-6
        border-[.25rem] border-solid border-white
        rounded-full
        "
      >
        <span
          className="
            block absolute left-1/2 top-2
            bg-white h-2 w-2 -ml-1
            rounded-full
            animate-scroll
            "
        ></span>
      </span>
    </div>
  );
}

export default Scroll;
