import React from 'react';
import CountUp from "react-countup"

const CountDown = () => {
  return (
    <div className='border border-emerald-50 shadow-md'>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
      <div className="text-center md:border-r">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"> <CountUp end={144} start={100} delay={0} enableScrollSpy />K</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Visitors
        </p>
      </div>
      <div className="text-center md:border-r">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={12.9} decimals={1} start={0} delay={0} enableScrollSpy />K</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Subscribers
        </p>
      </div>
      <div className="text-center md:border-r">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={48.3}  decimals={1} start={14} delay={0} enableScrollSpy />K</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Users
        </p>
      </div>
      <div className="text-center">
        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={24.5} decimals={1} start={9} delay={0} enableScrollSpy />K</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Cookies
        </p>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CountDown;