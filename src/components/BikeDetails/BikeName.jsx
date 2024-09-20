import React, { useState } from "react";

const BikeName = ({ bike }) => {
	const [isExpand, setIsExpand] = useState(false);

	const toggleDescription = () => {
		setIsExpand(!isExpand); // Toggle the expanded state
	};
	return (
		<div className="d-flex flex-column flex-md-row  mt-3 h-100 p-lg-3 gap-3 w-100">
			<div className="text-center w-100">
				<img
					src={bike.imageURL}
					alt={bike.model}
					className="rounded-3 img-fluid"
					style={{ height: "100%" }}
				/>
			</div>
			<div className="d-flex flex-column h-100 gap-1 my-auto w-100">
				<h2>
					{bike.brand} {bike.model}
				</h2>
				<p className="text-muted text-justify ">
					{isExpand
						? bike.description
						: `${bike.description.substring(0, 200)}...`}{" "}
					<span className="link-primary link-opacity-50" onClick={toggleDescription}>
						{!isExpand?"Show More":"Show Less"}
					</span>{" "}
				</p>

				<h2>{bike.price}.00</h2>
				<p>*Ex-showroom price</p>
				<button className="w-50 btn btn-danger">Get on Road Price</button>
			</div>
		</div>
	);
};

export default BikeName;
