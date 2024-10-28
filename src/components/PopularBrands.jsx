import React from "react";
import { Link } from "react-router-dom";

const PopularBrands = () => {
	return (
		<div className="mt-3">
			<h4>Popular Brands</h4>

			<div className="row justify-content-center mt-3">
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/Royal Enfield"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/royal_enfield.jpg"
						alt="Royal Enfield"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/TVS"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/tvs.jpg"
						alt="TVS"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/KTM"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/ktm.jpg"
						alt="KTM"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/Bajaj"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/bajaj.jpg"
						alt="Bajaj"
					/>
				</Link>
			</div>

			<div className="row justify-content-center mt-3">
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/OLA"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/ola.jpg"
						alt="Ola"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/Honda"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/honda.jpg"
						alt="Honda"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/Hero"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/hero.jpg"
						alt="Hero"
					/>
				</Link>
				<Link className="col-6 col-sm-4 col-md-3 mb-3" to={"/brand/Yamaha"}>
					<img
						className="rounded-4 border border-black img-fluid"
						src="/asset/images/logo/yamaha.jpg"
						alt="Yamaha"
					/>
				</Link>
			</div>
		</div>
	);
};

export default PopularBrands;
