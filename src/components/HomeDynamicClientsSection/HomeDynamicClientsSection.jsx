
import Title from "../Shared/Title/Title";
import LogoCaroselSection from "./LogoCaroselSection";
import style from "./logos.module.css";

const { slideanimation, parent: parentStyle } = style;

export default async function HomeDynamicClientsSection({ images: propImages }) {
  const images = await propImages;

  const displayImages = [...images];

  while (displayImages.length < 7) {
    displayImages.push(...images);
  }

  return (
    <div>
      <Title>Our Clients</Title>
      <LogoCaroselSection images={displayImages} />
    </div>
  );
}
