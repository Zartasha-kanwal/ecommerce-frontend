import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Newcollection from "../Components/NewCollections/Newcollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

export default function Shop() {
  return (
    <div>
      <Hero />

      <Popular />

      <Offers />
      <Newcollection/>
      <NewsLetter/>
      
    </div>
  );
}
