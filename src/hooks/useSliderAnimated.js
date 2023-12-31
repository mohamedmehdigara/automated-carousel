import { useEffect, useState } from "react";

const useSliderAnimated = () => {
  const [clickedSportCars, setClickedSportCars] = useState(true);
  const [clickedElectricCars, setClickedElectricCars] = useState(false);
  const [sportListClassName, setsportListClassName] = useState("");
  const [elecListClassName, setelecListClassName] = useState("");

  const handleClickAction = () => {
    setClickedSportCars((clickedSportCars) => !clickedSportCars);
    setClickedElectricCars((clickedElectricCars) => !clickedElectricCars);
  };

  useEffect(() => {
    if (clickedSportCars) {
      setelecListClassName("moveToRight");
      setTimeout(() => {
        setsportListClassName("moveFromLeft");
      }, 500);
    }

    if (clickedElectricCars) {
      setsportListClassName("moveToLeft");
      setTimeout(() => {
        setelecListClassName("moveFromRight");
      }, 500);
    }
    const autoSlideTimer = setInterval(() => {
      handleClickAction();
    }, 3700);

    return () => {
      clearInterval(autoSlideTimer);
      clearTimeout(setTimeout);
    };
  }, [clickedSportCars, clickedElectricCars]);

  return {
    clickedSportCars,
    handleClickAction,
    clickedElectricCars,
    sportListClassName,
    elecListClassName,
  };
};

export default useSliderAnimated;
