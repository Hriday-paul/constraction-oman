import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import BlackLogo from "@/images/nanco-logo-black.png";
import Image from "next/image";
import Link from "next/link";


const menu = [
  {
    item: "ABOUT US",
    subItem: {
      "OUR JOURNEY": "/about/our-journey",
      "CHAIRMAN'S MESSAGE": "/about/chairmen-msg",
      "MD'S MESSAGE": "/about/md-msg",
      "Videos": "/about/videos",
    },
  },
  {
    item: "BUSINESS LINES",
    subItem: {
      "ENGINEERING & CONSTRUCITON": "/buisiness-lines/engineering-constraction",
      "Water proof & Flooring facilities": "/buisiness-lines/water-proof-flooring-facilities",
      MEPI: "/buisiness-lines/mepi",
    },
  },
  {
    item: "PROJECTS",
    subItem: {
      "ENGINEERING & CONSTRUCITON": "/projects?category=engineering-constraction",
      "Water proof & Flooring facilities": "/projects?category=water-proof-flooring-facilities",
      MEPI: "/projects?category=mepi",
    },
  },
  {
    item: "KEY CLIENTS",
    link: "/key-clients",
  },
  {
    item: "PEOPLE",
    subItem: {
      "BOARD OF DIRECTORS": "/board-of-directors",
    },
    direction: "right",
  },
  {
    item: "CONTACT US",
    link: "/contact",
  },
];

const links = [
  {
    heading: "About Us",
    links: [
      {
        text: "Our Journey",
        link: "/about/our-journey",
      },
      {
        text: "Chairman's Message",
        link: "/about/chairmen-msg",
      },
      {
        text: "MD's Message",
        link: "/about/md-msg",
      },
      {
        text: "Videos",
        link: "/about/videos",
      },
    ],
  },
  {
    heading: "Business Lines",
    links: [
      {
        text: "Engineering & Construction",
        link: "/buisiness-lines/engineering-constraction",
      },
      {
        text: "Water proof & Flooring",
        link: "/buisiness-lines/water-proof-flooring-facilitiesn",
      },
      {
        text: "MEPI",
        link: "/buisiness-lines/mepi",
      },
    ],
  },
  {
    heading: "Projects",
    links: [
      {
        text: "Engineering & Construction",
        link: "/projects?category=engineering-constraction",
      },
      {
        text: "Water proof & Flooring",
        link: "/projects?category=water-proof-flooring-facilities",
      },
      {
        text: "MEPI",
        link: "/projects?category=mepi",
      },
    ],
  },
  {
    heading: "Others",
    links: [
      {
        text: "Peoples",
        link: "/board-of-directors",
      },
      {
        text: "Contact us",
        link: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t">
      <div className=" mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="container">
          <Link href={'/'}>
            <img height={500} width={500} src={'/nanco-logo-white.png'} alt="logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className=" ">
          <div className=" grid md:gap-10 gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 container">
            {links.map((link) => {
              return <FooterList key={crypto.randomUUID()} link={link} />;
            })}
          </div>
        </div>
        {/* <FooterSocialLogo /> */}

        <Copyright />
      </div>
    </footer>
  );
}

function FooterList({ link: { heading, links } }) {
  return (
    <div className="">
      <p className="font-medium text-gray-50 uppercase">{heading}</p>

      <ul className="mt-6 space-y-4 text-sm">
        {links.map((linkItem) => {
          return (
            <li key={crypto.randomUUID()}>
              <a
                href={linkItem.link}
                className="text-gray-200 transition hover:text-secondary"
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
        className="text-gray-300 transition text-2xl"
      >
        {icon}
      </a>
    </li>
  );
}

function Copyright() {
  return (
    <div className="mt-8 border-t border-gray-100 pt-8 container">
      <div className="justify-center items-center">
        <p className="text-xs text-gray-300 text-center">
          &copy; 2024. NANCCO. All rights reserved. Powerd by<Link href="https://nanccodevelopers.vercel.app" target="_blank" className=" text-secondary transition">
            {" "}
            Webzo{" "}
          </Link>.
        </p>

      </div>
    </div>
  );
}
