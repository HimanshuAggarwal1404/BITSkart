import { useState } from "react";
import ItemCard from "./itemcard";
import electronics from "./electronics.png";
import "./electronics.css";
import lg from "./lg.jpg";
import samsung from "./samsung.webp"
import lgwm from "./lg wm.webp"
import bsac from "./bluestarac.webp"
import kettle from "./kettle.webp"
import watch from "./firebolt.jpg"
import speaker from "./jbl.jpg"
import tab from "./tab.jpg"
import tws from "./boat.jpg"
function Electronics() {
  const [position, ChangePosition] = useState(0);

  return (
    <div className="electronics" id="electronics">
      <div className="Heading">
        <u> ELECTRONICS </u>
      </div>

      <div className="items" style={{ transform: `translateX(${position}vw)` }}>
        <ItemCard
          src={lg}
          name={"LG 674 L Frost-Free Inverter Linear Compressor"}
          price={"1,88,000"}
        />
        <ItemCard src={samsung} name={"SAMSUNG 657 L Frost Free Side by Side Refrigerator"} price={"1,96,990"} />

        <ItemCard src={lgwm} name={"LG 9 kg AI Direct Drive Technology Fully Automatic Front Load Washing Machine"} price={"44,490"} />
        <ItemCard src={bsac} name={"Blue Star Window AC"} price={"20,000"} />
        <ItemCard src={kettle} name={"Havells Aqua-Plus 1.2L Electric Kettle"} price={"1,990"} />
        <ItemCard src={watch} name={"Fire-Boltt Invincible Plus AMOLED Display Smartwatch "} price={"4,499"} />
        <ItemCard src={speaker} name={"JBL Flip 5 Wireless Portable Bluetooth Speaker"} price={"6,999"} />
        <ItemCard src={tws} name={"boAt Immortal 121 TWS Wireless Gaming in Ear Earbuds"} price={"1,499"} />
        <ItemCard src={tab} name={"OnePlus Pad 29.49cm (11.61 inch) LCD Display"} price={"38,000"} />
      </div>
      <button
        className="leftarrow"
        onClick={() => ChangePosition(position >= 0 ? 0 : position + 20)}
      >
        &lt;
      </button>
      <button
        className="rightarrow"
        onClick={() => ChangePosition(position <= -40 ? 0 : position - 20)}
      >
        &gt;
      </button>
    </div>
  );
}
export default Electronics;
