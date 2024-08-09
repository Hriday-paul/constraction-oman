import Image from "next/image";

export default function Slide({ left, images }) {
  const len = images.length;

  const totalCols = `repeat(${len}, minmax(0, 1fr))`;

  return (
    <div
      style={{
        gridTemplateColumns: totalCols,
      }}
      className={`h-full grid gap-4 px-2 `}
    >
      {images.map((imgObg) => {
        return <SlideImage src={imgObg?.image} key={crypto.randomUUID()} />;
      })}
    </div>
  );
}

function SlideImage({ src }) {
  return (
    <div className="flex justify-center items-center">
      <img
        height={500}
        width={500}
        alt="alt"
        className="h-28 object-contain"
        src={src}
      />
    </div>
  );
}
