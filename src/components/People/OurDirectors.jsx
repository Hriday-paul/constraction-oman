import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import PeopleCard from "./PeopleCard";

export default function OurDirectors({ peoples }) {
  return (
    <div className="">
      <div className="manager flex flex-col md:flex-row lg:flex-row justify-center place-items-center gap-4">
        <div className="p-5 flex flex-col justify-center place-items-center gap-4">
          <div className="icon text-5xl text-secondary">
            <IoRocketOutline />
          </div>
          <div className="text text-3xl text-center text-slate-500 font-bold">
            CEOS & <br />
            FOUNDERS
          </div>
        </div>
        {
          peoples?.directors?.map(director => {
            return <PeopleCard
              key={director?.id+director?.name}
              image={director?.image}
              name={director?.name}
              title={director?.position}
              email={director?.email}
              phone={director?.phone}
              isDirector={true}
              links={[
                {
                  icon: <FaFacebookF />,
                  link: "",
                },
                {
                  icon: <FaTwitter />,
                  link: "",
                },
                {
                  icon: <FaInstagram />,
                  link: "",
                },
              ]}
            />
          })
        }
      </div>
      <div className="teamMember my-12">
        <div className="title flex justify-center text-4xl font-semibold py-8 text-darkShade">
          Our Project Managers
        </div>
        <hr className=" bg-darkShade mb-5" />
        <div className="con  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {
            peoples?.pManagers?.map(manager => {
              return <PeopleCard
                key={manager?.id+manager?.name}
                image={manager?.image}
                name={manager?.name}
                title={manager?.position}
                links={[
                  {
                    icon: <FaFacebookF />,
                    link: "",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "",
                  },
                ]}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}
