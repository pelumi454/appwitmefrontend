import React, { useState } from "react";
import { connect } from "react-redux";
// import { NavLink, Redirect } from "react-router-dom";
import * as actions from "../store/actions/auth";
// import Loading from "./Loading";
import { Modal, Button } from "react-bootstrap";

const SignupForm = (props) => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		props.onAuth(data.username, data.email, data.password1, data.password2);
		props.handleSignupModal();
	};
	// const { redirect, isLoading, signupError } = props;
	return (
		<Modal show={props.showSignup} onHide={props.handleSignupModal}>
			<form onSubmit={handleFormSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Signup</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-sm">
								<i className="fa fa-user"></i>
							</span>
						</div>
						<input
							type="text"
							name="username"
							className="form-control"
							placeholder="Username"
							aria-label="username"
							// aria-describedby="basic-addon1"
							value={data.username}
							onChange={handleChange}
						/>
					</div>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-sm">
								<i className="fa fa-envelope"></i>
							</span>
						</div>
						<input
							type="email"
							name="email"
							className="form-control"
							placeholder="Email"
							aria-label="Email"
							aria-describedby="basic-addon1"
							value={data.email}
							onChange={handleChange}
						/>
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-sm">
								<i className="fa fa-lock"></i>
							</span>
						</div>
						<input
							type="password"
							name="password1"
							className="form-control"
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon1"
							value={data.password}
							onChange={handleChange}
						/>
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-sm">
								<i className="fa fa-lock"></i>
							</span>
						</div>

						<input
							type="password"
							name="password2"
							className="form-control"
							placeholder="Password confirmation"
							aria-label="Password confirmation"
							aria-describedby="basic-addon1"
							value={data.passwordConfirmation}
							onChange={handleChange}
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						type="submit"
						variant="success"
						className="submitBtn btn-default col-12"
					>
						Submit
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		signupError: state.error,
		redirect: state.redirect,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, email, password1, password2) =>
			dispatch(actions.authSignup(username, email, password1, password2)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
