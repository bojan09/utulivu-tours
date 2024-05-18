import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="h-[90vh]">
      <div className="homeBackground h-full w-full relative">
        <div className="bg-blue-200 w-[500px] h-[300px] text-center flex flex-col gap-[4rem] items-center justify-center absolute top-24 left-16">
          <h1 className="text-[45px] font-bold ">
            Let's make this your Best Trip Ever
          </h1>
          <Link href="/contact">
            <button className="rounded-[3rem] bg-blue-500 py-2 px-6 text-[16px]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
