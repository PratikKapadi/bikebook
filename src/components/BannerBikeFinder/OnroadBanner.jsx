
import { FaSearch } from "react-icons/fa";
import "./OnroadBanner.css";
import bikes from "../../database/bikes_data";
import { useNavigate } from "react-router-dom";

const OnroadBanner = () => {
  const navigate = useNavigate();

  const handlePrice = (e) => {
    e.preventDefault();

    // Get the value directly from the input field
    const bikeModel = e.target.elements[0].value;

    // Only navigate if a model was selected
    if (bikeModel) {
      navigate(`/OnRoadPrice/${bikeModel}`);
    }
  };

  return (
    <div className="container-fluid rounded-3 position-relative mt-5">
      {/* Background Image */}
      <div className="row">
        <div className="col-12 p-0">
          <img
            src="/asset/images/bikes/S1_Pro_X.webp"
            alt="Bike Banner"
            className="img-fluid w-100 banner-image"
          />
        </div>
      </div>

      {/* Overlay and Search Box */}
      <div className="overlay-text d-flex justify-content-center align-items-center">
        <div className="search-box text-center">
          <h2 className="text-white mb-4">Get On-Road price in your city</h2>
          <form className="input-group mb-3" onSubmit={handlePrice}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Bikes or Scooters here"
              aria-label="Search"
              aria-describedby="basic-addon2"
              list="bikes"
            />
            <datalist id="bikes">
              {bikes.map((bike) => (
                <option key={bike.model} value={bike.model} />
              ))}
            </datalist>

            <div className="input-group-append">
              <button className="btn btn-light" type="submit">
                <i>
                  <FaSearch />
                </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnroadBanner;
