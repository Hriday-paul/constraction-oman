import LineImage from "@/images/lines/line.webp";
import Image from "next/image";

export default function Title({ children }) {
  let words = children.split(" ");
  const wordOne = words.shift();
  const wordTwo = words.join(" ");
  return (
    <div className="my-16 text-center text-4xl text-muted flex flex-col justify-center items-center gap-2 font-medium">
      <h1 className="uppercase">
        {wordOne} <span className="text-primary">{wordTwo}</span>
      </h1>
      <Image src={LineImage} height={10} width={100} alt="line" className="w-60 h-auto" />
    </div>
  );
}
