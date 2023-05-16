import "./misc.css";
import pharma from "./pharma.jpg";
import foot from "./footwear.webp";
import bs from "./blood sugar.jpg";
import laptop from "./laptops.jpg";
function Misc() {
  return (
    <div className="misc">
      <div className="pharma">
        Pharmacy on BITSKART
        <div className="img">
          <img src={pharma} alt="Pharmacy" />
        </div>
      </div>
      <div className="shoes">
        UPTO 60% OFF ON FOOTWEAR
        <div className="img">
          <img src={foot} alt="Footwear" />
        </div>
      </div>
      <div className="pharma">
        Monitor Blood Sugar at Home{" "}
        <div className="img">
          <img src={bs} alt="Pharmacy" />
        </div>
      </div>
      <div className="pharma">BEST DEALS ON LAPTOPS | GET UPTO 50% OFF
        <div className="img">
          <img src={laptop} alt="Pharmacy" />
        </div>
      </div>
    </div>
  );
}
export default Misc;
