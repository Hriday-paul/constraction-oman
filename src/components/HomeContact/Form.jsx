import React from "react";

export default function Form() {
  return (
    <div className="w-[100%] p-12 bg-white border h-full rounded-md">
      <form
        action=""
        className="flex w-full flex-col lg:flex-row md:flex-row  gap-4  justify-center place-items-start"
      >
        <div className="input  w-full flex flex-col gap-4 h-full">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email Address*"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
        </div>
        <div className="w-full h-full">
          <textarea
            name=""
            id=""
            rows={7}
            placeholder="Your Requiremant"
            className="w-full p-3 border rounded-md focus:outline-none"
          ></textarea>
          <div className="but">
            <button className="px-10 py-2 hover:text-secondary hover:bg-transparent border-2 border-secondary duration-200 transition-all bg-secondary text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
