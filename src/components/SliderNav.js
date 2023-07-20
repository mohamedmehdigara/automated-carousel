const SliderNav = (props) => {
    const { clickedSportCars, handleClickAction, clickedElectricCars } = props;
    return (
      <nav>
        <span
          className={clickedSportCars ? "selected" : "clickLevel"}
          onClick={handleClickAction}
        >
          Sport cars
        </span>
        <span
          className={clickedElectricCars ? "selected" : "clickLevel"}
          onClick={handleClickAction}
        >
          Electric cars
        </span>
      </nav>
    );
  };
  
  export default SliderNav;