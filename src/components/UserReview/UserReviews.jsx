import React from "react";
import UserReviewCart from "./UserReviewCart";

const UserReviews = () => {
	const reviews = [
		{
			name: "Alex Hales",
			rating: 4.5,
			comment:
				"Amazing bike! The ride quality is smooth, and the engine performance is impressive.",
		},
		{
			name: "Ben Stokes",
			rating: 3.6,
			comment:
				"Great value for the money. The mileage is decent and very comfortable for long rides.",
		},
		{
			name: "Sam Bilings",
			rating: 5.0,
			comment:
				"Fantastic! The build quality is top-notch, and it handles really well in city traffic.",
		},
		{
			name: "David Warner",
			rating: 4.2,
			comment:
				"Very reliable bike. Perfect for both city commuting and long weekend rides.",
		},
	];
	return (
		<div className="container">
			<h4 className="my-4">User Reviews</h4>
			<div className="row">
				{reviews.map((review, index) => (
					<div className="col-12 col-md-6" key={index}>
						<UserReviewCart review={review} />
					</div>
				))}
			</div>
		</div>
	);
};

export default UserReviews;
