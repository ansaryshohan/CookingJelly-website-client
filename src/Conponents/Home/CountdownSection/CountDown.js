import React from "react";
import CountUp from "react-countup";

const CountDown = () => {
  return (
    <section className="bg-zinc-100 py-5">
      <div className="border-b-4 border-emerald-100 md:w-10/12 mx-auto">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:py-20">
          <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-y-10">
            <div className="text-center lg:text-left md:border-r">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl pb-5">
                {" "}
                <CountUp end={144} start={100} delay={0} enableScrollSpy />K
              </h6>
              <p className="text-base font-bold tracking-wider text-secondaryColor uppercase lg:text-lg">
                Visitors
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl pb-5">
                <CountUp
                  end={12.9}
                  decimals={1}
                  start={0}
                  delay={0}
                  enableScrollSpy
                />
                K
              </h6>
              <p className="text-base font-bold tracking-wider text-secondaryColor uppercase lg:text-lg">
                Subscribers
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl pb-5">
                <CountUp
                  end={48.3}
                  decimals={1}
                  start={14}
                  delay={0}
                  enableScrollSpy
                />
                K
              </h6>
              <p className="text-base font-bold tracking-wider text-secondaryColor uppercase lg:text-lg">
                Users
              </p>
            </div>
            <div className="text-center lg:text-right">
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl pb-5">
                <CountUp
                  end={24.5}
                  decimals={1}
                  start={9}
                  delay={0}
                  enableScrollSpy
                />
                K
              </h6>
              <p className="text-base font-bold tracking-wider text-secondaryColor uppercase lg:text-lg">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
