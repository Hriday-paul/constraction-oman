import Image from "next/image";
import style from "./logos.module.css";
import Title from "../Shared/Title/Title";

const { slideanimation, parent: parentStyle } = style;
export default async function HomeClientsSection({clients}) {
  const clientList = await clients;
  return (
    <div>
      <Title>Our Clients</Title>

      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="group overflow-hidden">
          {/** Slide Contaier*/}
          <div
            className={
              "relative h-44 w-[1700px] overflow-hidden " + parentStyle
            }
          >
            <div
              className={`absolute h-full w-full top-0 left-[100%] ${slideanimation}`}
            >
              <Slide clientList={clientList}/>
            </div>
            <div className={`h-full w-full ${slideanimation}`}>
              <Slide clientList={clientList}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ clientList }) {
  return (
    <div className={`h-full grid gap-4 pr-4 grid-cols-7`}>
      {clientList.map((client) => {
        return <SlideImage src={client?.image} key={crypto.randomUUID()} />;
      })}
    </div>
  );
}

function SlideImage({ src }) {
  return (
    <div className="flex justify-center items-center">
      <Image
        height={500}
        width={500}
        className="h-28 object-contain"
        src={src}
        alt="client logo"
      />
    </div>
  );
}
