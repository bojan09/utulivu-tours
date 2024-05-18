import React from "react";

const Home = () => {
  return (
    <section id="home" className="h-[90vh]">
      <div className="homeBackground h-full w-full relative">
        <div className="bg-blue-200 md:w-[500px] md:h-[300px] text-center flex flex-col md:gap-[4rem] items-center justify-center absolute md:top-24 md:left-16 sm:top-12 sm:left-8 sm:p-4 z-0">
          <h1 className="md:text-[45px] font-bold ">
            Let's make this your Best Trip Ever
          </h1>

          <button className="rounded-[3rem] bg-blue-500 py-2 px-6 text-[16px]">
            <a href="/contact">Book Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
