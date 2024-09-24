import React from "react";
import { Link } from "react-router-dom";

const BannerBikeFinder = () => {
	return (
		<div
			className="container-fluid mt-3 "
			id="bg"
			style={{
				backgroundImage: 'url("/asset/images/bikes/HD_440X.webp")',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "1000px",
			}}
		>
			<div className="mx-auto d-flex flex-column justify-content-center align-items-center h-100 gap-3">
				<h4 className="text-center" style={{ color: "white" }}>
					Discover the perfect bike
				</h4>
				<div className="d-flex  justify-content-center w-50">
					<select
						class="form-select text-center rounded-start-5"
						aria-label="Default select example"
					>
						<option selected>Select Brand</option>
						<option value="1">Royal Enfield</option>
						<option value="2">Hero</option>
						<option value="3">Ola</option>
						<option value="3">KTM</option>
						<option value="3">Honda</option>
						<option value="3">Bajaj</option>
					</select>
					<select
						class="form-select text-center rounded-end-5 "
						aria-label="Default select example"
					>
						<option selected>Select Model</option>
						<option value="1">Classic 350</option>
						<option value="2">Xpulse</option>
						<option value="3">FZ-X</option>
						<option value="3">Dominor 400</option>
						<option value="3">Duke 200</option>
						<option value="3">Unicorn 150</option>
					</select>
				</div>
				<button className="btn btn-danger w-25 rounded-5">Search</button>
			</div>
		</div>
	);
};

export default BannerBikeFinder;
