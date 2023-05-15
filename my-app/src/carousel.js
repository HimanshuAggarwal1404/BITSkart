import React, { useState } from "react";
import "./carousel.css";
import Card from "./carouselcard";
import electronics from "./electronics.png"
import clothing from "./clothing.webp"
import mobile from "./mobile.webp"
import grocery from "./grocery.jpg"
import sports from "./sports.png"
function Carousel() {
  const [count, updateCount]=useState(0);
  function SetZero(){
    updateCount(0)
  
  }
  if(count>=-400){
  setInterval(() => updateCount(count-100),3000);}
  else{SetZero()}

  return (
    <div className="carousel" style={{transform: `translateX(${count}vw)`}}>
      <Card src={electronics} />
      <Card src={clothing} />
      <Card src={mobile} />
      <Card src={grocery} />
      <Card src={sports} />

    </div>
  );
}
export default Carousel;
