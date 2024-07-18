import React from "react";
export default function Details({ icon, title, info }) {
  return (
    <div className="flex  place-items-center font-normal gap-2">
      <div className="icon text-3xl text-secondary">{icon}</div>
      <div className="text text-xl flex justify-start flex-col place-items-start">
        <h1 className="text-white font-semibold">{title}</h1>
        <p className="text-secondary font-medium text-lg">{info}</p>
      </div>
    </div>
  );
}
