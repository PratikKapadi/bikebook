import React from "react";

const PopularBrands = () => {
	return (
		<div className="mt-3">
			<h4>Popular Brands</h4>

			<div className="row justify-content-center mt-3">
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/royal_enfield.jpg"
						alt="Royal Enfield"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/tvs.jpg"
						alt="TVS"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/ktm.jpg"
						alt="KTM"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/bajaj.jpg"
						alt="Bajaj"
					/>
				</div>
			</div>

			<div className="row justify-content-center mt-3">
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/ola.jpg"
						alt="Ola"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/honda.jpg"
						alt="Honda"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/hero.jpg"
						alt="Hero"
					/>
				</div>
				<div className="col-6 col-sm-4 col-md-3 mb-3">
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/yamaha.jpg"
						alt="Yamaha"
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularBrands;
