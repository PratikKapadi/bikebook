import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "../router/AppHeadNavbar.css";
import { FaSearch } from "react-icons/fa";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/footer/Footer";

const AppHeadNavbar = () => {
	return (
		<>
			<div className="mb-3">
				<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/" id="l1">
							<p className="navbar-brand m-auto">BikeBook</p>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<div className="mx-auto d-flex flex-column flex-md-row">
								<ul className="navbar-nav">
									<li className="nav-item ">
										<Link className="nav-link" to="/">
											<form className="d-flex" role="search">
												<input
													className="form-control rounded-5 border-light"
													type="search"
													placeholder="Search Bikes Here"
													aria-label="Search"
												/>
												<button
													className="btn btn-outline-light rounded-5"
													type="submit"
												>
													<i>
														<FaSearch />
													</i>
												</button>
											</form>
										</Link>
									</li>
								</ul>
							</div>
							<ul className="navbar-nav ms-auto">
								<li className="nav-item ">
									<Link className="nav-link" to="/wishlist">
										<FaHeart /> Wishlist
									</Link>
								</li>
								<li className="nav-item  ">
									<Link className="nav-link" to="/login-register">
										<FaUserCircle /> Login/Register
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<MainNavbar />

			<Outlet />
			<Footer />
		</>
	);
};

export default AppHeadNavbar;
