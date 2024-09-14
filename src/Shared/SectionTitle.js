import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 mb-14 text-center mx-auto">
      <h1 className="text-2xl text-[#579BB1] font-semibold ">{title}</h1>
      <div className="divider w-40 mx-auto mt-0 mb-0"></div>
      {description ? <p className="text-3xl font-bold">{ description} </p> : <></> }
    </div>
  );
};

export default SectionTitle;
