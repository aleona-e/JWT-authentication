import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const onLogout = () => {
		localStorage.removeItem("jwt-token")
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="d-grid gap-2 d-md-flex justify-content-md-end">
					<Link to="/login">
						<button className="btn btn-outline-primary">Login</button>
					</Link>
					<Link to="/">
					<button onClick={onLogout} className="btn btn-outline-danger">Logout</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
