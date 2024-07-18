
import Chairimage from "./../../../asset/About/chairman.webp";
import image from "./../../../asset/About/md.jpg";
import MdMassage from "./MdMassage";
export default function MDMassageContainer() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="container">
        <MdMassage
          image={image}
          who={"MD"}
          quotes={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae fugiat dignissimos totam eum odio optio veritatis assumenda deleniti ipsa, amet magnam, deserunt praesentium omnis aliquid ex exercitationem obcaecati soluta?"
          }
        />
        <MdMassage
          image={Chairimage}
          isMd={true}
          who={"Chairman"}
          quotes={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae fugiat dignissimos totam eum odio optio veritatis assumenda deleniti ipsa, amet magnam, deserunt praesentium omnis aliquid ex exercitationem obcaecati soluta?"
          }
        />
      </div>
    </div>
  );
}
