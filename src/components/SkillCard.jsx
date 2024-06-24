import React from "react";
export default function SkillCard({ icon, title, level }) {
  return (
    <div className="shadow w-[130px] h-[130px] flex justify-center items-center rounded-md ">
      <div className=" flex flex-col items-center justify-center  " >
        <div className="text-3xl">{icon} </div>
        <h2 className=" font-semibold text-gray-400">{title}</h2>
        <p className="text-xs text-gradient font-bold">{level}</p>
      </div>
    </div>
  );
}
