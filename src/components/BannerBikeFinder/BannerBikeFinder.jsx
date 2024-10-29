import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bikes from "../../database/bikes_data";
import { bikeByBrand, brandList } from "../../models/bikes";

const BannerBikeFinder = () => {
	const [bike, setBike] = useState({
		brand: "",
		model: "",
	});
	const navigate = useNavigate();
	const brands = brandList(bikes);
	const brandByBikeObject = bikeByBrand(bike.brand, bikes);
	console.log(bike.brand);
	const handleSubmit = () => {
		navigate(`/bike/${bike.model}`);
	};

	return (
		<div
			className="container-fluid rounded-3"
			id="bg"
			style={{
				backgroundImage: 'url("/asset/images/bikes/HD_440X.webp")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
			}}
		>
			<div className="mx-auto d-flex flex-column justify-content-center align-items-center h-100 gap-3">
				<h4 className="text-center" style={{ color: "white" }}>
					Discover the perfect bike
				</h4>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 col-lg-4">
							<div className="d-flex">
								<select
									className="form-select text-center rounded-start-5"
									aria-label="Select Brand"
									value={bike.brand}
									onChange={(e) => setBike({ ...bike, brand: e.target.value })}
								>
									<option value="">Select Brands</option>
									{brands.map((brand) => (
										<option key={brand} value={brand}>
											{brand}
										</option>
									))}
								</select>
								<select
									className="form-select text-center rounded-end-5"
									aria-label="Select Model"
									value={bike.model}
									onChange={(e) => setBike({ ...bike, model: e.target.value })}
								>
									<option value="">Select Models</option>
									{brandByBikeObject.map((bike) => (
										<option key={bike.model} value={bike.model}>
											{bike.model}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>

				<button
					className="btn btn-danger w-25 rounded-5"
					onClick={handleSubmit}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default BannerBikeFinder;
