import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tripscroller from "../components/Tripscroller";
import BackgroundBalloon from "../components/BackgroundBallon";

export default function Realhomepage() {
  const { state } = useLocation();

  const blogCards = () => {
    let finalCards = [];
    let i = 1;
    if(state.itinerary[0].length  < 20){
      state.itinerary = state.itinerary.slice(1);
    }

    // for (let i = 0; i < state.itinerary.length -; i++) {

    // }

    state.itinerary.forEach((day) => {
      if(!day.includes("Day")) {
        finalCards.push({
          title: "Notes", text: day
        });
      }
      else{
        finalCards.push({
          title: "Day " + i + " of trip", text: day
        });
      }
      i += 1;
    });

    return finalCards;
  };

  return (
    <div className="">
      {/* BackgroundBalloon */}
      <div className="absolute inset-0 z-0">
        <BackgroundBalloon className="h-fit w-fit absolute inset-0 object-cover" />
      </div>

      {/* Tripscroller */}
      <div className="flex flex-col gap-4 py-40 align-center">
        <Tripscroller tuff={blogCards()} />
      </div>
    </div>
  );
}






/*import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tripscroller from "../components/Tripscroller";
import BackgroundBalloon from "../components/BackgroundBallon";

const Realhomepage = () => {
  const { state } = useLocation();

  const blogCards = () => {
    let finalCards = [];
    let i = 1;

    state.itinerary.forEach((day) => {
      finalCards.push({
        title: "Day " + i + " of trip",
        text: day,
      });

      i += 1;
    });

    return finalCards;
  };

  return (
    <>
    <div
      className="flex items-center min-h-screen gap-6 text-black px-20 bg-red opacity-bg-80"
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <Tripscroller tuff={blogCards()} />
    </div>
    <BackgroundBalloon />
    </>
  );
}


export default Realhomepage;*/