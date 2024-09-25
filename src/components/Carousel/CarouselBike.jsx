import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./CarouselBike.css"; // Custom styles

const CarouselBike = () => {
	// Custom previous and next arrows for better control
	const PreviousArrow = ({ onClick }) => (
		<div className="slick-arrow prev-arrow" onClick={onClick}>
			<FaChevronLeft />
		</div>
	);

	const NextArrow = ({ onClick }) => (
		<div className="slick-arrow next-arrow" onClick={onClick}>
			<FaChevronRight />
		</div>
	);

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
		nextArrow: <NextArrow />,
		prevArrow: <PreviousArrow />,
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
			<h4 className="text-center mb-4">Popular Bikes</h4>
			<div className="carousel-container">
				<Slider {...settings}>
					<div className="image-slide">
						<img src="/asset/images/bikes/Activa_6G.webp" alt="Activa 6G" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/bikes/Duke_200.webp" alt="Duke 200" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/bikes/Avenger_220.webp" alt="Avenger 220" className="carousel-image" />
					</div>
					<div className="image-slide">
						<img src="/asset/images/bikes/Apache_RTR_310.webp" alt="Apache RTR 310" className="carousel-image" />
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default CarouselBike;
