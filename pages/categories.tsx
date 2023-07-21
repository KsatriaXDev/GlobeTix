import React from "react";
import Navbar from "./components/organisems/Navbar";
import Hero from "./components/molecules/Hero";
import Top from "./components/molecules/Top";
import Discount from "./components/molecules/Discount";
import New from "./components/molecules/New";

export default function categories() {
  return (
    <>
      <Navbar />
      <Hero />
      <Top />
      <Discount />
      <New />
    </>
  );
}
