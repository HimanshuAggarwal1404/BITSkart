import { useState } from "react";
import ItemCard from "./itemcard";
import electronics from "./electronics.png";
import "./electronics.css";
import s21 from "./s21.webp"
import nord from "./nordce3.webp"
import redmi from "./redmi.webp"
import iphone from "./iphone.webp"
import s23 from "./s23 ultra.webp"
import oppo from "./oppo.webp"
import vivo from './vivo.webp'
function Mobiles() {
  const [position, ChangePosition] = useState(0);

  return (
    <div className="mobiles" id="mobiles">
      <div className="Heading">
        <u> MOBILES </u>
      </div>

      <div className="items" style={{ transform: `translateX(${position}vw)` }}>
      <ItemCard src={iphone} name={"Apple iPhone 14 Pro Max(128 GB, Deep Purple)"} price={"1,31,500"} />
      <ItemCard src={s23} name={"Samsung Galaxy S23 Ultra 5G (Green, 12GB, 512GB Storage)"} price={"1,34,999"} />

        <ItemCard
          src={s21}
          name={"Samsung S21 FE 5G | 8GB RAM"}
          price={"58,990"}
        />
        <ItemCard src={nord} name={"OnePlus Nord CE 3 Lite 5GB"} price={"21,990"} />

        
        <ItemCard src={redmi} name={"Redmi Note 11"} price={"15,000"} />
        <ItemCard src={oppo} name={"OPPO Reno8 5G"} price={"30,000"} />
        <ItemCard src={vivo} name={"Vivo V27 Pro 5G (12 GB RAM, 256 GB ROM, Magic Blue)"} price={"42,999"} />
        <ItemCard src={electronics} name={"Refrigerator"} price={"188000"} />
        <ItemCard src={electronics} name={"Refrigerator"} price={"188000"} />
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
export default Mobiles;
