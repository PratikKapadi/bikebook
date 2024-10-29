import React from "react";

const BikeComDetails = ({ bike }) => {
  return (
    <div className="col-6">
      <img src={bike.imageURL} alt="" className="w-100 rounded-4" />
      <table className="table table-light table-striped table-hover rounded-4 mt-2">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center fw-bold">
              {bike.brand} {bike.model}
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              {" "}
              {bike.price}.00
              <br />
              <span className="fw-lighter" style={{ fontSize: 12 }}>
                {" "}
                *Ex-showroom price
              </span>
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="text-center fw-bold">
              Specifications
            </td>
          </tr>
          <tr>
            <td>Engine</td>
            <td> {bike.specifications.Engine}</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>{bike.specifications.Mileage}</td>
          </tr>
          <tr>
            <td>Max Torque </td>
            <td>{bike.specifications.Max_Torque}</td>
          </tr>
          <tr>
            <td>Kerb Weight </td>
            <td>{bike.specifications.Kerb_Weight}</td>
          </tr>
          <tr>
            <td>Body Type</td>
            <td> {bike.specifications.Body_Type}</td>
          </tr>
          <tr>
            <td>ABS </td>
            <td>{bike.specifications.ABS}</td>
          </tr>
          <tr>
            <td>Seat Height </td>
            <td>{bike.specifications.Seat_Height}</td>
          </tr>
          <tr>
            <td>Fuel Tank Capacity </td>
            <td>{bike.specifications.Fuel_Tank_Capacity}</td>
          </tr>
          <tr>
            <td>Clutch </td>
            <td>{bike.specifications.Clutch}</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center fw-bold">
              Features
            </td>
          </tr>
          <tr>
            <td>Touch_Screen_Display </td>
            <td>{bike.features.Touch_Screen_Display}</td>
          </tr>
          <tr>
            <td>Stant_Alarm </td>
            <td>{bike.features.Stant_Alarm}</td>
          </tr>
          <tr>
            <td>Battery </td>
            <td>{bike.features.Battery}</td>
          </tr>
          <tr>
            <td>Pillion_Seat </td>
            <td>{bike.features.Pillion_Seat}</td>
          </tr>
          <tr>
            <td>Hazard_Warning_Indicator </td>
            <td>{bike.features.Hazard_Warning_Indicator}</td>
          </tr>
          <tr>
            <td>Low_Oil_Indicator </td>
            <td>{bike.features.Low_Oil_Indicator}</td>
          </tr>
          <tr>
            <td>Fuel_Gauge </td>
            <td>{bike.features.Fuel_Gauge}</td>
          </tr>
          <tr>
            <td>Odometer </td>
            <td>{bike.features.Odometer}</td>
          </tr>
          <tr>
            <td>Instrument_Console </td>
            <td>{bike.features.Instrument_Console}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BikeComDetails;
