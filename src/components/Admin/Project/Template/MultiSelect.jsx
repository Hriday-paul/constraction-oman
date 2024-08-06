"use client";
import React, { useEffect, useRef, useState } from "react";

const defaultSelectOptions = [
  { id: 1, service_name: "Anonymo" },
  { id: 2, service_name: "Alayth" },
  { id: 3, service_name: "Sirius" },
  { id: 4, service_name: "Arrowbeen" },
];

const MultiSelect = React.memo(({
  selectOptions = defaultSelectOptions,
  label = "Choose Sector",
  placeholder = "Select an option",
  selected,
  setSelected
})=> {
  const [options, setOptions] = useState(selectOptions);
  const [show, setShow] = useState(false);
  // const [selected, setSelected] = useState([]);
  const ref = useRef({
    isMenuOver: false,
    triggerInMouse: false,
  });

  useEffect(() => {
    const listener = window.addEventListener("click", (e) => {
      if (!ref.current.triggerInMouse && !ref.current.isMenuOver) {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("click", listener);
    };
  }, []);

  const showDropDwon = () => {
    setShow(true);
  };

  const handleOptionClick = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectId) => selectId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectClick = (id) => {
    setSelected(selected.filter((selectId) => selectId !== id));
  };

  const optionMapId = {};
  for (const option of selectOptions) {
    optionMapId[option.id] = option;
  }

  const selectOptionObj = selected.map((id) => optionMapId[id]);

  return (
    <div className="relative z-50 w-full xl:w-1/2">
      <label className="mb-2 block font-medium text-black dark:text-white">
        {label}
      </label>
      <div>
        <div className="flex flex-col items-center">
          {/* <input name="values" type="hidden" defaultValue={selectedValues()} /> */}
          <div className="relative z-20 inline-block w-full">
            <div className="relative flex flex-col items-center ">
              {/* open or close */}
              <div className="w-full">
                <div
                  onClick={showDropDwon}
                  onMouseEnter={() => {
                    ref.current.triggerInMouse = true;
                  }}
                  onMouseLeave={() => {
                    ref.current.triggerInMouse = false;
                  }}
                  className="mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                >
                  {/* input field */}
                  <div className="flex flex-auto flex-wrap gap-3">
                    {selected.length ? (
                      selectOptionObj.map((option) => {
                        return (
                          <SelectOption
                            key={crypto.randomUUID()}
                            name={option.service_name}
                            handleClick={() => handleSelectClick(option.id)}
                          />
                        );
                      })
                    ) : (
                      <Placeholder placeholder={placeholder} />
                    )}
                  </div>
                  <div className="flex w-8 items-center py-1 pl-1 pr-1">
                    <button
                      type="button"
                      className="h-6 w-6 cursor-pointer outline-none focus:outline-none"
                    >
                      <SvgDownArrow />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                {/* hidden or show */}
                <div
                  onMouseEnter={() => (ref.current.isMenuOver = true)}
                  onMouseLeave={() => (ref.current.isMenuOver = false)}
                  className={`max-h-select absolute top-full left-0 z-40 w-full overflow-y-auto rounded bg-white shadow dark:bg-form-input ${
                    show ? "" : "hidden"
                  }`}
                >
                  <div className="flex w-full flex-col border">
                    {options.map((option) => {
                      return (
                        <div
                          key={option.id}
                          onClick={() => handleOptionClick(option.id)}
                        >
                          <Option option={option} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

MultiSelect.displayName = 'MultiSelect'
export default MultiSelect;

function SelectOption({ name, handleClick }) {
  return (
    <div className="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
      <div className="max-w-full flex-initial">{name}</div>
      <div className="flex flex-auto flex-row-reverse">
        <div
          className="cursor-pointer pl-2 hover:text-danger"
          onClick={handleClick}
        >
          <SvgCrossIcon />
        </div>
      </div>
    </div>
  );
}

function Placeholder({ placeholder }) {
  return (
    <div className="flex-1">
      <input
        readOnly
        placeholder={placeholder}
        className="h-full w-full appearance-none bg-transparent p-1 px-2 outline-none"
      />
    </div>
  );
}

function Option({ option, open }) {
  return (
    <div className="w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark">
      <div
        className={`relative flex w-full items-center border-l-2 border-transparent p-2 pl-2`}
      >
        <div className="flex w-full items-center" name="dsjfkl">
          <div className="mx-2 leading-6">{option.service_name}</div>
        </div>
      </div>
    </div>
  );
}

function SvgCrossIcon() {
  return (
    <svg
      className="fill-current"
      role="button"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function SvgDownArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
          fill="#637381"
        ></path>
      </g>
    </svg>
  );
}
