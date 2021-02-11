import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../store/actions/auth";
import * as businessActions from "../store/actions/businessRedux";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavBarStyle from "./NavBar.module.scss";
import LogInForm from "../Components/LogInForm";
import SignupForm from "../Components/SignupForm";

const NavBar = (props) => {
	const [showLogin, setShowLogin] = useState(false);
	const handleLoginModal = () => {
		setShowLogin(!showLogin);
	};

	const [showSignup, setShowSignup] = useState(false);
	const handleSignupModal = () => {
		setShowSignup(!showSignup);
	};
	return (
		<>
			<Navbar
				bg="light"
				variant="light"
				fixed="top"
				className={NavBarStyle.nav}
			>
				<Navbar.Brand>
					<NavLink to="/" onClick={props.fetchbisinesses}>
						<img
							src="https://find-blue-collar.s3.us-east-2.amazonaws.com/static/images/logo.png"
							alt="AppWitMe"
							width="30"
							height="30"
							className="d-inline-block align-top mr-2"
						/>
					</NavLink>
					APPWITME
				</Navbar.Brand>
				{props.isAuthenticated ? (
					<Nav className="ml-auto">
						<NavLink to="/dashboard" className="nav-link">
							<i className="fas fa-tachometer-alt text-white"></i> Dashboard
						</NavLink>
						<NavLink
							to="/logout"
							className="nav-link"
							onClick={() => {
								window.location.replace("/");
								props.logout();
							}}
						>
							<i className="fas fa-sign-out-alt"></i> Logout
						</NavLink>
					</Nav>
				) : (
					<Nav className="ml-auto">
						<Button
							variant="light"
							className={NavBarStyle.loginButton}
							onClick={handleLoginModal}
						>
							Login
						</Button>
						<Button
							variant="primary"
							className={NavBarStyle.signupButton}
							onClick={handleSignupModal}
						>
							Signup
						</Button>
					</Nav>
				)}
			</Navbar>
			<LogInForm showLogin={showLogin} handleLoginModal={handleLoginModal} />
			<SignupForm
				showSignup={showSignup}
				handleSignupModal={handleSignupModal}
			/>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(authActions.logout()),
		fetchbisinesses: () => dispatch(businessActions.fetchBusinesses()),
	};
};
export default withRouter(connect(null, mapDispatchToProps)(NavBar));
