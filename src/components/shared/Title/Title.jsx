import LineImage from "@/images/lines/line.webp";
import Image from "next/image";
export default function Title({ children }) {
  let words = children;
  if (!children || !children.trim() || words.split(" ").length !== 2) {
    words = "Please_Give_Two_Word_With Space";
  }
  const [wordOne, wordTwo] = words.split(" ");
  return (
    <div className="mt-16 mb-8 text-center text-4xl text-muted flex flex-col justify-center items-center gap-2 font-medium">
      <h1 className="uppercase font-semibold">
       {wordOne} <span className="text-primary">{wordTwo}</span>
      </h1>
      <Image src={LineImage} height={10} width={100} alt="line" className="w-60 h-auto" />
    </div>
  );
}
