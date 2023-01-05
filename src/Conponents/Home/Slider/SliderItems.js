import React from 'react';
import './slideritems.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderItems = ({ slider }) => {
  const { id, next, previous, title, paragraph, img } = slider
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-3/4">
      <div className='img-gradient h-full '>
        <img src={img} alt='' className="w-full h-3/4 " />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10">
        <a href={`#slide${previous}`} className="btn btn-circle mr-9">
          <FaArrowLeft className='text-[#579BB1] text-xl' />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          <FaArrowRight className='text-[#579BB1] text-xl' />
        </a>
      </div>

      <div className="absolute flex flex-col justify-between transform -translate-y-1/2 top-1/2 left-20">
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-bold text-white w-2/5'>{title}</h1>
          <p className='text-xl font-semibold text-white w-3/5'>{paragraph}</p>
          <div className='mt-20 flex gap-5'>
            <button className="btn btn-success w-40 font-bold bg-[#579] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] border-[#579] hover:border-[#579]">Get started </button>
            
            <button className="btn btn-outline w-40 font-bold text-[#579BB1] border-[#579] hover:bg-[#579]"> See Our Products</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderItems;