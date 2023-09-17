import React from "react";
import { useLocation } from "react-router-dom";

export default function Realhomepage() {
  const { state } = useLocation();

  return <div>{JSON.stringify(state)}</div>;
}
