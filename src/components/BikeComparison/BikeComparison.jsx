import React from "react";
import { useParams } from "react-router-dom";
import bikes from "../../database/bikes_data";
import { locateBike } from "../../models/bikes";
import BikeComDetails from "./BikeComDetails";

const BikeComparison = () => {
  const { model1, model2 } = useParams();
  const bike1 = locateBike(bikes, model1);
  const bike2 = locateBike(bikes, model2);
  console.log(bike1, bike2);

  return (
    <div className="container">
      <h2 >{bike1.brand} {bike1.model} vs {bike2.brand} {bike2.model} Comparison</h2>
      <div className="row mt-3">
        <BikeComDetails bike={bike1}/>
        <BikeComDetails bike={bike2}/>
      </div>
    </div>
  );
};

export default BikeComparison;
