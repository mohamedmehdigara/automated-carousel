import "./App.css";
import Banner from "./components/Banner";
import CarBrandsSlide from "./components/CarBrandsSlide";
import Slider from "./components/Slider";
import useSliderAnimated from "./hooks/useSliderAnimated";

function App() {
  return (
    <div className="wrapper">
      <Banner />
      <div className="container">
        <Slider />
        <useSliderAnimated/>
      </div>
    </div>
  );
}

export default App;