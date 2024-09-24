import React from "react";

const PopularBrands = () => {
	return (
		<div className="mt-3">
			<h4>Popular Brands</h4>
			<div class="d-flex justify-content-evenly mt-3">
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/royal_enfield.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/tvs.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/ktm.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/bajaj.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
			</div>
			<div class="d-flex justify-content-evenly mt-3">
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/ola.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/honda.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/hero.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
				<img
					className="rounded-4 border border-black"
					src="/asset/images/logo/yamaha.jpg"
					alt="img not found"
					style={{ height: "200px", width: "200px" }}
				/>
			</div>
		</div>
	);
};

export default PopularBrands;
