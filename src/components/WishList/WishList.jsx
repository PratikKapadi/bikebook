import React, { useContext } from "react";
import { WishlistContext } from "../../App";
import { FaRegTrashAlt } from "react-icons/fa";

const WishList = () => {
	const { wishlist, removeFromWishlist } = useContext(WishlistContext);
	return (
		<div className="d-flex flex-column gap-3">
			<h2 className="ms-3">My Wishlist</h2>
			<ul className="list-group">
				{wishlist.map((item) => {
					return (
						<li className="list-group-item">
							<div className="d-flex justify-content-between align-items-center">
								<div>
									<img
										src={item.imageURL}
										alt={item.model}
										width={150}
										height={120}
									/>
								</div>
                                <div>
                                    {item.brand} {item.model}
                                </div>
                                <div>
                                    {item.price}.00
                                </div>
                                <div>
                                    <button className="btn btn-outline-danger" onClick={()=>{
                                        removeFromWishlist(item)
                                        alert("Removed")
                                    }}><FaRegTrashAlt/></button>
                                </div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default WishList;
