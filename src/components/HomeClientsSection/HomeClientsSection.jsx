import Image from "next/image";
import Client2 from "@/images/clients/client-2.png";
import Client3 from "@/images/clients/client-3.jpg";
import Client4 from "@/images/clients/client-4.png";
import Client5 from "@/images/clients/client-5.jpeg";
import style from "./logos.module.css";
import Title from "../Shared/Title/Title";

const images = [Client2, Client3, Client4, Client5, Client2, Client4];

const { logodiv, logocontainer } = style;
export default function HomeClientsSection() {
  return (
    <div>
      <Title>Our Clients</Title>
      <div
        className={
          "my-5 whitespace-nowrap overflow-hidden container" +
          "" +
          logocontainer
        }
      >
        <ImgSlide allImage={images} />
        <ImgSlide allImage={images} />
      </div>
    </div>
  );
}

function ImgSlide({ allImage }) {
  return (
    <div className={"inline-block w-full" + " " + logodiv}>
      <div className="h-20 flex gap-7 justify-around">
        {allImage.map((imgSrc) => {
          return (
            <div key={crypto.randomUUID()}>
              <Image height={300} width={300} src={imgSrc} alt="logo" className="h-10 md:h-12 lg:h-16 w-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
