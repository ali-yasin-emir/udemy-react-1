"use client";
import Image from "next/image";
import dot from "./dot.png";
import { useState } from "react";

const Modal = () => {
  const content = [
    {
      id: 0,
      title: "Why React?",
      descriptions: [
        ["React is extremely popular"],
        ["It makes building complex, interactive UIs breeze"],
        ["It's powerful & flexible"],
        ["It has a very active and versatile ecosystem"],
      ],
    },
    {
      id: 1,
      title: "Related Resources",
      descriptions: [
        ["Components, JSX & Props"],
        ["State"],
        ["Hooks (e.g., useEffect())"],
        ["Dynamic rendering"],
      ],
    },
    {
      id: 2,
      title: "Core Features",
      descriptions: [
        ["Official web page(react.dev)"],
        ["Next.js (Fullstack framework)"],
        ["React Native (build native mobile apps with React)"],
      ],
    },
    {
      id: 3,
      title: "React vs JS",
      descriptions: [
        ["Vanilla JavaScript requires imperative programming"],
        [
          "Imperative Programming: You define all the steps needed to achieve a result",
        ],
        ["React on the other hand embraces declarative programming"],
        [
          "With React, you define the goal and React figures out how to get there",
        ],
      ],
    },
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClick = (currentTabIndex) => {
    setCurrentTabIndex(currentTabIndex);
    // if(currentTabIndex === 0){
    //     // currentTabIndex += 1
    //     setCurrentTabIndex(currentTabIndex + 1)
    // } else{

    // }
  };

  const tabClass =
    "bg-slate-600 px-2 flex justify-center items-center rounded-t-lg max-md:rounded-lg cursor-pointer flex-1";

  return (
    <div className="p-12 flex flex-col max-md:mx-auto">
      <div className="flex gap-1 max-md:flex-col max-md:w-full">
        <div
          onClick={(currentTabIndex) => handleClick(0)}
          className={`${
            currentTabIndex === 0 ? "bg-[#00D8FF]" : ""
          } ${tabClass}`}
        >
          {content[0].title}
        </div>
        <div
          onClick={(currentTabIndex) => handleClick(1)}
          className={`${
            currentTabIndex === 1 ? "bg-[#00D8FF]" : ""
          } ${tabClass}`}
        >
          {content[1].title}
        </div>
        <div
          onClick={(currentTabIndex) => handleClick(2)}
          className={`${
            currentTabIndex === 2 ? "bg-[#00D8FF]" : ""
          } ${tabClass}`}
        >
          {content[2].title}
        </div>
        <div
          onClick={(currentTabIndex) => handleClick(3)}
          className={`${currentTabIndex === 3 ? "bg-[#00D8FF]" : "" } ${tabClass} max-md:rounded-b-none `}
        >
          {content[3].title}
        </div>
      </div>
      <div className="bg-slate-400 max-md:w-[340px] w-[540px] h-[220px] max-md:h-[340px] rounded-b-lg">
        <div className="p-6 flex flex-col gap-2">
          {content[currentTabIndex].descriptions.map((description, index) => {
            return (
              <div className="flex gap-2 items-center" key={index}>
                <Image alt="dot img" width={28} height={28} src={dot} />{" "}
                {description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
