interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <div
      className="bg-blue rounded-2xl w-fit
              flex flex-col py-1 px-2 gap-2 items-start justify-center"
      id="tag"
    >
      {name}
    </div>
  );
}

export default Tag;
