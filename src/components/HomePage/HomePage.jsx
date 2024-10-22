import React from "react";

import BannerBikeFinder from "../BannerBikeFinder/BannerBikeFinder";
import CarouselBike from "../Carousel/CarouselBike";
import PopularBrands from "../PopularBrands";
import TopSellingBikes from "../TopSelingBikes";
import UserReviews from "../UserReview/UserReviews";
import OnroadBanner from "../BannerBikeFinder/OnroadBanner";

const HomePage = () => {
	return (
		<div className="container">
			<BannerBikeFinder />
			<CarouselBike />
			<PopularBrands />
			<OnroadBanner />
			<TopSellingBikes />
			<UserReviews />
		</div>
	);
};

export default HomePage;
