import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ newUser }) => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();
	//event  handler to handle  username change event
	const handleUsernameChange = (e) => {
		setUser({ ...user, username: e.target.value });
	};
	//event handler to handle password change event
	const handlePasswordChange = (e) =>
		setUser({ ...user, password: e.target.value });

	//event handler to handle from submit event
	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Login Form is Submitted", {
			theme: "dark",
			onClose: () => {
				navigate(`/`);
			},
			autoClose: 3000,
		});
	};

	return (
		<div className="container border border-secondary p-3 mt-3 rounded shadow-lg col-12 col-lg-3 col-sm-9 ">
			<h3 className="text-center fw-bolder ">Login to Bikebook</h3>
			<p className="mt-3 ">
				New user?
				<button className="btn btn-link fw-bolder" onClick={newUser}>
					Sign up
				</button>
			</p>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label" htmlFor="un">
						Username
					</label>
					<input
						className="form-control  border-secondary"
						id="un"
						type="text"
						placeholder="ENTER USERNAME"
						value={user.username}
						onChange={handleUsernameChange}
						required
					/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="pw">
						Password
					</label>
					<input
						className="form-control  border-secondary"
						type="Password"
						id="pw"
						placeholder="ENTER PASSWORD"
						value={user.password}
						onChange={handlePasswordChange}
						required
					/>
				</div>
				<div className="text-center">
					<Button
						className="me-3 w-75 bg-black text-Light border border-secondary fs-5 fw-bold"
						type="submit"
					>
						Log In
					</Button>
				</div>
			</form>
		</div>
	);
};
export default LoginForm;
