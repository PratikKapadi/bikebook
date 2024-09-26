import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselBike.css";

const CarouselBike = () => {


	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: "0",
		focusOnSelect: true,
		
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container mt-5">
			<h4 className="text-left mb-4">Popular Bikes</h4>
			<div className="carousel-container">
				<Slider {...settings}>
					<div className="image-slide">
						<img src="/asset/images/Bike/honda_activa_6g.png" alt="Activa 6G" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/Bike/ktm_duke_200.png" alt="Duke 200" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/Bike/royal_enfield_guerrilla_450.png" alt="Guerrilla 450" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/Bike/tvs_apache_rtr_310.png" alt="Apache RTR 310" className="carousel-image" />
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default CarouselBike;
