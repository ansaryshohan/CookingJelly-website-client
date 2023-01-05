import React from 'react';
import './Subscription.css'


const Subscription = () => {
  return (
    <div className=''>

        <div className='img-subscription' >
          {/* <img src="https://i.ibb.co/1svJFh7/subscription-Image.jpg" alt="" /> */}
          <div className=' w-1/2 mt-5 pt-20 z-20'>
          <div className="">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#579BB1] sm:text-4xl md:mx-auto">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Subscribe to be the first to receive special news and event updates from us.
            </p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 bg-white border border-gray-300 rounded shadow-sm md:mr-2 md:mb-0 focus:border-[#579BB1] focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white rounded shadow-md md:w-auto bg-[#579BB1] hover:bg-[#A0C3D2] focus:shadow-outline focus:outline-none cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
            Hoping to be in touch from now on.Eat healthy, stay healthy.
          </p>
          
        </div>
          </div>
          </div >

          
    </div>
  );
};

export default Subscription;