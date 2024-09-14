import React from "react";
import { Link } from "react-router-dom";
import recipeImg from "../../../assets/share4.jpg";

const ShareRecipeSection = () => {
  return (
    <section className="bg-zinc-100 md:p-10">
      <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-10 md:gap-6 pb-10">
        {/* image section */}
        <div className="pt-24 md:pt-0 px-4 md:px-0">
          <img
            src={recipeImg}
            alt="share recipe banner"
            className="w-full h-80 md:h-full object-cover object-center rounded-lg"
          />
        </div>
        {/* text section of shared recipe */}
        <div className="flex flex-col justify-center items-center gap-5 mb-14 text-center">
          <h1 className="text-3xl font-bold">
            {" "}
            Share Your <span className="text-orange-700">Recipes</span>
          </h1>
          <p className="text-base font-medium w-4/5 mx-auto">
            Connect with our cooking community by sharing your own recipes.Share
            your home made hygienic food with good taste.{" "}
          </p>
          <div>
            <Link to={"/addrecipe"}>
              <button className="px-4 py-1 sm:px-8 sm:py-2 text-sm sm:text-lg rounded-lg font-medium lg:font-bold bg-[#579] text-[#E1D7C6] border-[#579] ">
                Share recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareRecipeSection;
