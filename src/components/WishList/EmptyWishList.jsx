import React from "react";

const EmptyWishList = () => {
	return (
		<div className="text-center mx-auto">
			<img
				src="/asset/images/Bike/empty.png"
				alt="Empty Wishlist"
				className="img-fluid w-50"
			/>

			<h1>Your Wishlist is empty.</h1>

            <button className="btn btn-outline-secondary w-25">Go To Home</button>
		</div>
	);
};

export default EmptyWishList;
