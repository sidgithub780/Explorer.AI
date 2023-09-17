import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tripscroller from "../components/Tripscroller";

export default function Realhomepage() {
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
    <div
      className="flex items-center min-h-screen gap-6 text-black px-20 bg-green-300"
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <Tripscroller tuff={blogCards()} />
    </div>
  );
}
