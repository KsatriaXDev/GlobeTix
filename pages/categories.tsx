import React from "react";
import Navbar from "./components/organisems/Navbar";
import Hero from "./components/organisems/Hero";
import TopDestination from "./components/organisems/TopDestination";
import Discount from "./components/organisems/Discount";
import NewDestination from "./components/organisems/NewDestination";

export default function categories() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopDestination />
      <Discount />
      <NewDestination />
    </>
  );
}
