import LineImage from "@/images/lines/line.webp";
import Image from "next/image";
export default function Title({ children }) {
  let words = children.split(" ");
  const wordOne = words.shift();
  const wordTwo = words.join(" ");

  return (
    <div className="mt-16 mb-8 text-center text-muted flex flex-col justify-center items-center gap-2">
      <h1 className="uppercase font-bold text-5xl">
       <span>{wordOne}</span> <span className="text-primary">{wordTwo}</span>
      </h1>
      <Image src={LineImage} height={10} width={100} alt="line" className="w-60 h-auto" />
    </div>
  );
}