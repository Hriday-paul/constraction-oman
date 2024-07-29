import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import BlackLogo from "@/images/nanco-logo-black.png";
import Image from "next/image";

const links = [
  {
    heading: "About Us",
    links: [
      {
        text: "Our Journey",
        link: "#",
      },
      {
        text: "Chairman's Message",
        link: "#",
      },
      {
        text: "MD's Message",
        link: "#",
      },
    ],
  },
  {
    heading: "Business Lines",
    links: [
      {
        text: "Engineering & Construction",
        link: "#",
      },
      {
        text: "MEPI",
        link: "#",
      },
    ],
  },
  {
    heading: "Projects",
    links: [
      {
        text: "Engineering & Construction",
        link: "#",
      },
      {
        text: "Integrated Facilites Management-Oman",
        link: "#",
      },
      {
        text: "MEPI",
        link: "#",
      },
    ],
  },
  {
    heading: "Peoples",
    links: [
      {
        text: "Board of Directors",
        link: "#",
      },
      {
        text: "Senior Leadership",
        link: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="container">
          <Image height={500} width={500} src={'/nanco-logo-black.png'} alt="logo" className="h-12 w-auto" />
        </div>
        <div className=" ">
          <div className=" grid md:gap-10 gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 container">
            {links.map((link) => {
              return <FooterList key={crypto.randomUUID()} link={link} />;
            })}
          </div>
        </div>
        <FooterSocialLogo />

        <Copyright />
      </div>
    </footer>
  );
}

function FooterList({ link: { heading, links } }) {
  return (
    <div className="">
      <p className="font-medium text-gray-900 uppercase">{heading}</p>

      <ul className="mt-6 space-y-4 text-sm">
        {links.map((linkItem) => {
          return (
            <li key={crypto.randomUUID()}>
              <a
                href={linkItem.link}
                className="text-gray-700 transition hover:text-primary"
              >
                {" "}
                {linkItem.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FooterSocialLogo() {
  return (
    <ul className="col-span-2 mt-9 flex justify-center gap-6 lg:col-span-5 lg:justify-end">
      <SocialIcon icon={<FaFacebook className="hover:text-[#1877F2]" />} />
      <SocialIcon icon={<FaYoutube className="hover:text-[#ff0000]" />} />
      <SocialIcon icon={<FaTwitter className="hover:text-[#1DA1F2]" />} />
    </ul>
  );
}

function SocialIcon({ icon }) {
  return (
    <li>
      <a
        href="#"
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition text-2xl"
      >
        {icon}
      </a>
    </li>
  );
}

function Copyright() {
  return (
    <div className="mt-8 border-t border-gray-100 pt-8 container">
      <div className="flex flex-col justify-center items-center gap-y-5 md:justify-between md:flex-row">
        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>

        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              {" "}
              Terms & Conditions{" "}
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              {" "}
              Privacy Policy{" "}
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              {" "}
              Cookies{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
