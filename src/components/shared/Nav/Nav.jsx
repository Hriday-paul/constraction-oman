'use client'

import { IoMenuOutline } from "react-icons/io5";
import { Drawer, Menu } from "antd";
import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState("white");
  const [isDown, setIsDown] = useState(false);
  const navRaf = useRef(null);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const listener = window.addEventListener("scroll", (e) => {
      if (window.scrollY > 120) {
        setLogo("black");
        setIsDown(true);
      } else {
        setLogo("white");
        setIsDown(false);
      }
    });

    return () => {
      removeEventListener("scroll", listener);
    };
  }, []);

  const relativeCss =
    "transition-all duration-500 transition relative z-50 w-full text-white bg-transparent";
  const fixedCss =
    "transition-all duration-500 fixed bg-white text-black z-50 w-full shadow-xl";

  return (
    <div ref={navRaf} className={isDown ? fixedCss : relativeCss}>
      <div className={`w-full fixed top-0 left-0 ${isDown ? 'bg-white text-black shadow-lg' : ''}`}>
        <div className=" py-2 max-w-7xl mx-auto">

          <div className="flex flex-row justify-between items-center p-3 relative">
            <Link href='/' className="w-24">
              <img
                height={500}
                width={500}
                src={logo ===
                  "white" ? '/nanco-logo-white.png' : '/nanco-logo-black.png'}
                className="w-full h-auto"
                alt="nanco oman logo"
              />
            </Link>
            <div className="hidden lg:block">
              <ULList data={menu} />
            </div>
            <div className="lg:hidden block" onClick={showDrawer}>
              <IoMenuOutline className="text-3xl md:text-4xl cursor-pointer" />
            </div>
            <Drawer title="MENU" onClose={onClose} open={open}>
              <DrawerItem links={menu} />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

function DrawerItem({ links }) {
  const items = links.map((link) => {
    if (link.subItem) {
      const entries = Object.entries(link.subItem);

      return {
        key: crypto.randomUUID(),
        label: <span className="text-primary">{link.item}</span>,
        children: entries.map(([name, link]) => {
          return {
            key: crypto.randomUUID(),
            label: <a href={link}>{name}</a>,
          };
        }),
      };
    }

    return {
      key: crypto.randomUUID(),
      label: (
        <a className="text-primary" href={link.link}>
          <span className="text-primary">{link.item}</span>
        </a>
      ),
    };
  });

  return (
    <Menu
      style={{
        width: "100%",
      }}
      mode="inline"
      items={items}
    />
  );
}

function ULList({ data }) {
  return (
    <ul className="flex flex-row gap-x-8 items-center ">
      {data.map((item) => (
        <ListItem item={item} key={crypto.randomUUID()} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  if (item.link) {
    return (
      <li className="relative group">
        <Link href={item.link} className="flex flex-row gap-x-0.5 items-center">
          <span className="text-l cursor-pointer">{item.item}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="relative group py-3">
      <span className="flex flex-row gap-x-0.5 items-center">
        <span className="text-l cursor-pointer">{item.item}</span>
        <RiArrowDropDownLine className="text-xl cursor-pointer" />
      </span>
      <DropDownMenu subItem={item.subItem} direction={item.direction} />
    </li>
  );
}

function DropDownMenu({ subItem, direction = "left" }) {
  const links = Object.entries(subItem);
  return (
    <div
      className={`absolute shadow-xl hover:opacity-1 opacity-0 translate-y-14 h-0 overflow-hidden group-hover:h-auto group-hover:overflow-visible group-hover:block ease-linear group-hover:opacity-100 group-hover:translate-y-7 hover:translate-y-7 transition md:absolute top-5 bg-white text-black md:shadow-lg md:rounded-sm z-50  ${direction === "left" ? "left-0" : "right-0"
        }`}
    >
      <ul className="min-w-80 flex flex-col hover:delay-300">
        {links.map(([name, link]) => {
          return (
            <li
              key={crypto.randomUUID()}
              
            >
              <Link href={link} className=" border-b flex justify-between items-center duration-300 px-5 py-4 hover:bg-slate-50 hover:text-secondary font-medium">
                <p className=" text-sm">
                  {name}
                </p>
                <span>
                  <RiArrowDropDownLine className="-rotate-90" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;