import React from 'react';
import './slideritems.css';

const SliderItem = ({ slider }) => {
  const {title, paragraph, img } = slider;
  return (
    <div  className="relative w-full h-[80vh]">
      <div className='img-gradient relative w-full h-full overflow-hidden'>
        <img src={img} alt='banner food background' className="w-full h-full object-cover object-center" />
      </div>

      <div className="absolute flex flex-col justify-between -translate-y-2/4 top-2/4 left-8 md:left-20">
        <div className='flex flex-col gap-4 md:gap-6'>
          <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-white w-4/5 lg:w-7/12'>{title}</h1>
          <p className='text-xs md:text-xl lg:text-lg font-semibold text-white w-4/5 sm:w-3/5'>{paragraph}</p>
          <div className='mt-5 md:mt-10 flex gap-5'>
            <button className="px-4 py-1 sm:px-8 sm:py-2 text-sm sm:text-lg rounded-lg font-medium lg:font-bold bg-[#579] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] border-[#579] hover:border-[#579]">Get started </button>
            
            <button className="rounded-lg px-2 py-1 sm:px-5 sm:py-2 text-sm sm:text-lg  font-bold md:font-bold lg:font-bold text-[#579BB1] border border-[#579] hover:bg-[#579] hover:text-white"> See Our Products</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderItem;