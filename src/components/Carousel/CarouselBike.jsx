import React from "react";
import "./CarouselBike.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBike = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: "0",
		focusOnSelect: true,
	};

	return (
		<div className="carousel-container">
			<h4 className="carousel-title">Popular Bikes</h4>
			<Slider {...settings}>
				<div className="image-slide">
					<img src="/asset/images/bikes/Activa_6G.webp" alt="bike 1" />
				</div>
				<div className="image-slide">
					<img src="/asset/images/bikes/Duke_200.webp" alt="bike 2" />
				</div>
				<div className="image-slide">
					<img src="/asset/images/bikes/Avenger_220.webp" alt="bike 3" />
				</div>
				<div className="image-slide">
					<img src="/asset/images/bikes/Apache_RTR_310.webp" alt="bike 4" />
				</div>
			</Slider>
		</div>
	);
};

export default CarouselBike;
