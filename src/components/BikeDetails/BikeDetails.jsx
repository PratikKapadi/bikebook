import bikes from "../../database/bikes_data";
import { bikeObject } from "../../models/bikes";
import BikeFeatures from "./BikeFeatures";
import BikeName from "./BikeName";
import BikeReviews from "./BikeReviews";
import BikeSpecs from "./BikeSpecs";
const BikeDetails = ({ model }) => {
	const bike = bikeObject(bikes, model);

	return (
		<div className="container">
			<BikeName bike={bike} />
			<BikeSpecs specs={bike.specifications}/>
			<BikeFeatures feature={bike.features}/>
			<BikeReviews reviews={bike.customer_review.reviews}/>
		</div>
	);
};

export default BikeDetails;
