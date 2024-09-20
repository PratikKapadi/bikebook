import { IoMdPerson } from "react-icons/io";
import { Rating } from "react-simple-star-rating";

const ReviewCart = ({ review }) => {
	return (
		<div className="card mb-3" style={{ maxWidth: "530px" }}>
			<div className="row g-0">
				<div className="col-md-4 text-center pt-3">
					<IoMdPerson size={150} />
				</div>
				<div
					className="col-md-8 rounded "
					style={{ background: "#4a4946", color: "#fff" }}
				>
					<div className="card-body">
						<h5 className="card-title">{review.name}</h5>
						<Rating
							initialValue={review.rating}
							fillColor="#ffe700"
							size={25}
							allowFraction
							readonly
						/>
						<hr className="text-light" />

						<p className="card-text text-light">"{review.comment}"</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCart;
