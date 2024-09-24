import { useParams } from "react-router-dom";
import bikes from "../../database/bikes_data";
import { locateBike } from "../../models/bikes";
import BikeFeatures from "./BikeFeatures";
import BikeName from "./BikeName";
import BikeReviews from "./BikeReviews";
import BikeSpecs from "./BikeSpecs";
const BikeDetails = () => {
	const {model}=useParams();
	const bike = locateBike(bikes, model);

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
