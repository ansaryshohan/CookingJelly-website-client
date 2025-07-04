import React from "react";
import "./loadingComp.css";

const LoadingComp = () => {
  return (
    <div className="bg-secondaryBgColor min-h-[40vh]">
      <div className="w-10/12 mx-auto h-[40vh] flex justify-center items-center">
        <div className="w-full h-[40vh] flex items-center justify-center gap-5">
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-greenColor  dark:border-violet-600"></div>
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-greenColor  dark:border-violet-600"></div>
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-greenColor dark:border-violet-600"></div>
          <div className="w-14 h-14 border-4 border-dashed rounded-full animate-spin border-greenColor dark:border-violet-600"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComp;
