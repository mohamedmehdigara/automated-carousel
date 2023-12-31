import { Fragment } from "react";

const CarBrandsSlide = ({ dataArray }) => {
  return (
    <Fragment>
      {dataArray && dataArray.map((res) => (
        <li key={res.id}>
          <img
            loading="lazy"
            src={res.logo}
            alt="logo"
            style={{ width: res.width, height: "auto" }}
          />
          <br />
          <h4 style={{ fontSize: 17 }}>{res.text}</h4>
        </li>
      ))}
    </Fragment>
  );
};

export default CarBrandsSlide;