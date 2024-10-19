import React, { useContext } from "react";
import { WishlistContext } from "../../App";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const WishList = () => {
	const navigate=useNavigate()
	const { wishlist, removeFromWishlist } = useContext(WishlistContext);
	return (
		<div className="text-center">
			{wishlist.length === 0 ? (
				<div>
					<h2>Wishlist is Empty</h2>
				</div>
			) : (
				<div className="d-flex flex-column gap-3">
					<h2 className="ms-3">My Wishlist</h2>
					<ul className="list-group">
						{wishlist.map((item) => {
							return (
								<li className="list-group-item">
									<div className="d-flex justify-content-between align-items-center" >
										<div>
											<img
												src={item.imageURL}
												alt={item.model}
												width={150}
												height={120}
											/>
										</div>
										<div onClick={()=>{
										navigate(`/bike/${item.model}`)
									}}>
											{item.brand} {item.model}
										</div>
										<div>{item.price}.00</div>
										<div>
											<button
												className="btn btn-outline-danger"
												onClick={() => {
													removeFromWishlist(item);
													toast.success("Remove From wishlist", {
														theme: "dark",
													});
												}}
											>
												<FaRegTrashAlt />
											</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default WishList;
