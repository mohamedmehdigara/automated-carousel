import { Fragment } from "react";
import CarBrandsSlide from "./CarBrandsSlide";
import { sportCarsArray, electricCarsArray } from "../data";

const Slider = () => {
  return (
    <Fragment>
      <div id="slider" className="slider">
        <ul id="ListSport" className="badgesList">
<CarBrandsSlide dataArray={sportCarsArray}/>
        </ul>
        <ul id="ListElectric" className="badgesList">

        <CarBrandsSlide dataArray={electricCarsArray}/>
        </ul>
      </div>
    </Fragment>
  );
};

export default Slider;