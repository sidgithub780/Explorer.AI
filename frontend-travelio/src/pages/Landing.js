import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex items-center min-h-screen gap-6 text-black px-20 bg-green-300"
        style={{ overflowY: "hidden", height: "100vh" }}
      >
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex mt-5">
              {"Travelio".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="hover:-mt-2 transition-all duration-500 hover:duration-100  text-8xl  font-bold hover:text-white"
                  >
                    {letter}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="text-2xl mt-4">
            Your personal trip planner, travel guide, budget-keeper, and journal
          </div>
          <button className="bg-black rounded-md px-9 py-3 text-green-300 text-xl hover:scale-105 active:scale-95 font-bold mt-4">
            Make memories
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
