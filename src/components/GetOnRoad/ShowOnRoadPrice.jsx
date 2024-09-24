import React, { useState } from "react";
import {
	locateBike,
	locateCity,
	convertCurrencyToInt,
} from "../../models/bikes";
import bikes from "../../database/bikes_data";
import cityCharges from "../../database/city_charges";
import { cityName } from "../../models/bikes";
import VariantPrice from "./VariantPrice";

const ShowOnRoadPrice = ({ model }) => {
	const bike = locateBike(bikes, model);
	const citys = cityName(cityCharges);
	const [city, setCity] = useState(cityCharges[0]);

	const handelChange = (e) => {
		const cityData = locateCity(cityCharges, e.target.value);
		setCity(cityData);
	};
	const onRoadPrice =
		convertCurrencyToInt(bike.price) +
		convertCurrencyToInt(city.charges.RoadTax) +
		convertCurrencyToInt(city.charges.Insurance) +
		convertCurrencyToInt(city.charges.OtherCharges) +
		convertCurrencyToInt(city.charges.RoadTax);
	return (
		<>
		<div className="d-flex flex-column flex-md-row  mt-3 h-100 px-lg-3 gap-3 w-100">
			<div className="text-left w-100 h-100">
				<img
					src={bike.imageURL}
					alt={bike.model}
					className="rounded-3 img-fluid"
					style={{ height: "100%" }}
				/>
				<h5  className="mt-3">City</h5>
				<select
					className="form-select mt-3"
					name="city"
					id="city"
					onChange={handelChange}
				>
					{citys.map((city, index) => (
						<option key={index} value={city}>
							{city}
						</option>
					))}
				</select>
			</div>
			<div className="d-flex flex-column h-100 gap-3 my-auto w-100">
				<h2>
					{bike.brand} {bike.model}
				</h2>
				<table className="table">
					<tbody>
						<tr>
							<th className="py-3">Ex-Showroom</th>
							<td className="py-3">{bike.price}.00</td>
						</tr>
						<tr>
							<th className="py-3">Road Tax</th>
							<td className="py-3">{city.charges.RoadTax}.00</td>
						</tr>
						<tr>
							<th className="py-3">Insurance</th>
							<td className="py-3">{city.charges.Insurance}.00</td>
						</tr>
						<tr>
							<th className="py-3">Registration Fee</th>
							<td className="py-3">{city.charges.RegistrationFee}.00</td>
						</tr>
						<tr>
							<th className="py-3">Other Charges</th>
							<td className="py-3">{city.charges.OtherCharges}.00</td>
						</tr>
						<tr>
							<th className="py-3">On Road Price</th>
							<td className="py-3">
								&#8377;
								{onRoadPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
									.replace(/^(\d+),/, "$1,")}
								.00
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<VariantPrice bike={bike} onRoadPrice={onRoadPrice}/>
		</>
	);
};

export default ShowOnRoadPrice;
