import "./misc.css";
import pharma from "./pharma.jpg";
import foot from "./footwear.webp"
function Misc() {
  return (
    <div className="misc">
      <div className="pharma">
        Pharmacy on BITSKART
        <div className="img"><img src={pharma} alt="Pharmacy"/></div>
      </div>
      <div className="shoes">
        UPTO 60% OFF ON FOOTWEAR
      <div className="img"><img src={foot} alt="Footwear"/></div>

      </div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Misc;
