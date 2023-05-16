import { useState } from "react";
import ItemCard from "./itemcard";
import electronics from "./electronics.png";
import "./electronics.css";
import kurta from "./kurta.jpg"
import shirt from "./shirt.jpg"
import saree from "./saree.jpg"
import shirt1 from "./shirt1.jpg"
import top from "./top.jpg"
import sweater from "./sweater.jpg"
import shirt2 from"./shirt2.jpg"
import jogger from "./jogger.jpg"
import dress from "./dress.jpg"
function Clothing() {
  const [position, ChangePosition] = useState(0);

  return (
    <div className="clothing" id="clothing">
      <div className="Heading">
        <u> CLOTHING </u>
      </div>
      
      <div className="items" style={{ transform: `translateX(${position}vw)` }}>
        <ItemCard src={kurta} name={"Men's Kurta Set"} price={"989"}/>
        <ItemCard src={shirt} name={"Men's Regular Casual Shirt"} price={"850"}/>
        <ItemCard src={saree} name={"Saree"} price={"599"}/>
        <ItemCard src={shirt1} name={"Men's Solid Regular Fit Casual Shirt"} price={"579"}/>
        <ItemCard src={top} name={"Anarva Jaipuri Cotton Printed Peplum Kimono Sleeves Top for Women"} price={"522"}/>
        <ItemCard src={sweater} name={"Symbol Men's Acrylic Casual Sweater"} price={"889"}/>
        <ItemCard src={shirt2} name={"Women's Regular Fit Shirt"} price={"573"}/>
        <ItemCard src={jogger} name={"Inkast Denim Co. Men Casual Jogger"} price={"2,049"}/>
        <ItemCard src={dress} name={"Anarva Jaipuri Cotton Printed Flared A-Line Dress for Women"} price={"1,199"}/>


      </div>
      <button
        className="leftarrow"
        onClick={() => ChangePosition(position>=0? 0: position+20)}
      >
        &lt;
      </button>
      <button
        className="rightarrow"
        onClick={() => ChangePosition(position<=-40? 0: position-20)}
      >
        &gt;
      </button>
    </div>
  );
}
export default Clothing;
