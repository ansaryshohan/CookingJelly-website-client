import React from 'react';
import './slideritems.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderItems = ({ slider }) => {
  const { id, next, previous, title, paragraph, img } = slider
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-[70vh] lg:h-3/4">
      <div className='img-gradient w-full h-full '>
        <img src={img} alt='' className="w-full lg:h-3/4 h-full " />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 
        right-0 bottom-0 lg:right-10 lg:bottom-16  md:right-10 md:bottom-10">
        <a href={`#slide${previous}`} className="btn btn-circle mr-4 md:mr-6 lg:mr-9">
          <FaArrowLeft className='text-[#579BB1] lg:text-xl md:text-xl text-base' />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          <FaArrowRight className='text-[#579BB1] lg:text-xl md:text-xl text-base' />
        </a>
      </div>

      <div className="absolute flex flex-col justify-between transform -translate-y-1/2 top-1/2 left-20">
        <div className='flex flex-col gap-4 md:gap-8 lg:gap-10'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white w-4/5 lg:w-2/5'>{title}</h1>
          <p className='text-xs md:text-xl lg:text-xl font-semibold text-white w-3/5'>{paragraph}</p>
          <div className='mt-5 md:mt-20 lg:mt-20 flex gap-5'>
            <button className="btn btn-success  lg:w-40 font-medium lg:font-bold bg-[#579] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] border-[#579] hover:border-[#579]">Get started </button>
            
            <button className="btn btn-outline font-medium w-32 md:w-40 md:font-bold lg:w-40 lg:font-bold text-[#579BB1] border-[#579] hover:bg-[#579]"> See Our Products</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderItems;