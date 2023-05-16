import { useState } from "react";
import ItemCard from "./itemcard";
import electronics from "./electronics.png";
import "./electronics.css";
import lg from "./lg.jpg"

function Clothing() {
  const [position, ChangePosition] = useState(0);

  return (
    <div className="clothing" id="clothing">
      <div className="Heading">
        <u> CLOTHING </u>
      </div>
      
      <div className="items" style={{ transform: `translateX(${position}vw)` }}>
        <ItemCard src={lg} name={"LG 674 L Frost-Free Inverter Linear Compressor"} />
        <ItemCard src={electronics} name={"Refrigerator"} />

        <ItemCard src={electronics} name={"Refrigerator"} />
        <ItemCard src={electronics} name={"Refrigerator"} />

        <ItemCard src={electronics} name={"Refrigerator"} />
        <ItemCard src={electronics} name={"Refrigerator"} />
        <ItemCard src={electronics} name={"Refrigerator"} />
        <ItemCard src={electronics} name={"Refrigerator"} />
        <ItemCard src={electronics} name={"Refrigerator"} />


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
