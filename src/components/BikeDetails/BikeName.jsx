import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../App";
import { toast } from "react-toastify";
import { wishlistBike } from "../../models/bikes";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
const BikeName = ({ bike }) => {
	const { wishlist, addToWishlist, removeFromWishlist } =
		useContext(WishlistContext);
	const wishlistAddedBike = wishlistBike(wishlist, bike.model) || {};
	const navigate = useNavigate();
	const handlePrice = () => {
		navigate(`/OnRoadPrice/${bike.model}`);
	};
	const [isExpand, setIsExpand] = useState(false);
	const [like, setLike] = useState(Object.keys(wishlistAddedBike).length === 0);
	const toggleDescription = () => {
		setIsExpand(!isExpand);
	};
	const likeBtn = () => {
		if (like) {
			setLike(false);
			addToWishlist(bike);
			toast.success("Add To Wishlist", { theme: "dark" });
		} else {
			setLike(true);
			removeFromWishlist(bike);
			toast.success("Remove From wishlist", {
				theme: "dark",
			});
		}
	};
	return (
		<div className="d-flex flex-column flex-md-row h-100 p-lg-3 gap-3 w-100">
			<div className="text-center w-100 position-relative">
				<img
					src={bike.imageURL}
					alt={bike.model}
					className="rounded-3 img-fluid"
					style={{ height: "100%" }}
				/>
				<div
					className="position-absolute"
					style={{ top: "10px", right: "10px" }}
					onClick={likeBtn}
				>
					{Object.keys(wishlistAddedBike).length === 0 ? (
						<TiHeartOutline size={30} style={{ color: "#D3D3D3" }} />
					) : (
						<TiHeartFullOutline size={30} style={{ color: "red" }} />
					)}
				</div>
			</div>
			<div className="d-flex flex-column h-100 gap-1 my-auto w-100">
				<h2>
					{bike.brand} {bike.model}
				</h2>
				<p className="text-muted text-justify ">
					{isExpand
						? bike.description
						: `${bike.description.substring(0, 200)}...`}{" "}
					<span
						className="link-primary link-opacity-50"
						onClick={toggleDescription}
					>
						{!isExpand ? "Show More" : "Show Less"}
					</span>{" "}
				</p>

				<h2>{bike.price}.00</h2>
				<p>*Ex-showroom price</p>
				<button className="w-50 btn btn-danger" onClick={handlePrice}>
					Get on Road Price
				</button>
			</div>
		</div>
	);
};

export default BikeName;
