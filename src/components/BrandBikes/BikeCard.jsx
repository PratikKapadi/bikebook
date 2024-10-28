import React from "react";
import { Link } from "react-router-dom";

const BikeCard = ({ bike }) => {
  return (
    <Link className="card me-3 text-decoration-none" to={`/bike/${bike.model}`}>
      <img src={bike.imageURL} className="card-img-top" alt={bike.model} />
      <div className="card-body">
        <h5 className="card-title">
          {bike.brand} {bike.model}
        </h5>
        <h5 className="card-title">{bike.price}.00*</h5>
        <p className="btn btn-outline-danger w-100 mt-2">Show Details</p>
      </div>
    </Link>
  );
};

export default BikeCard;
