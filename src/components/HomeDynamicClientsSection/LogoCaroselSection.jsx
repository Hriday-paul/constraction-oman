import Slide from "./Slide";
import style from "./logos.module.css";

const { slideanimation, parent: parentStyle } = style;
const UNITWIDTH = 230;
const UNITTIME = 3;

export default function LogoCaroselSection({ images }) {
  const width = UNITWIDTH * images.length;
  const time = UNITTIME * images.length;

  return (
    <div className="container overflow-hidden">
      <div className="container group overflow-hidden">
        {/** Slide Contaier*/}
        <div
          style={{
            width: width + "px",
          }}
          className={"relative h-44 overflow-hidden " + parentStyle}
        >
          <div
            style={{
              animationDuration: time + "s",
            }}
            className={`absolute h-full w-full top-0 left-[100%] ${slideanimation}`}
          >
            <Slide images={images} />
          </div>
          <div
            style={{
              animationDuration: time + "s",
            }}
            className={`h-full w-full ${slideanimation}`}
          >
            <Slide images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
