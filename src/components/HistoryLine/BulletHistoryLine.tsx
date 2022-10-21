interface BulletHistoryLineProps {
  _extraStyles?: string;
}

function BulletHistoryLine({ _extraStyles }: BulletHistoryLineProps) {
  return (
    <div
      className={`bg-blue w-4 h-4 flex
       items-center justify-center rounded-full -ml-2 mr-3 ${_extraStyles}`}
    />
  );
}

export default BulletHistoryLine;
