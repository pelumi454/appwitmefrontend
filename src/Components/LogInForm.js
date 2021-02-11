import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import * as actions from "../store/actions/auth";

const LogInForm = (props) => {
	const [data, setData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onAuth(data.username, data.password);
		props.handleLoginModal();
	};
	return (
		<Modal show={props.showLogin} onHide={props.handleLoginModal}>
			<form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-sm">
								<i className="fa fa-envelope"></i>
							</span>
						</div>
						<input
							type="text"
							name="username"
							className="form-control"
							placeholder="username"
							aria-label="username"
							onChange={handleChange}
							value={data.username}
							aria-describedby="basic-addon1"
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
							name="password"
							className="form-control"
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon1"
							onChange={handleChange}
							value={data.password}
						/>
					</div>

					{/* <p className="text-center" style={{ color: "black" }}>
								Don't have an account?
								<Signup
									className="Login-signup"
									style={{ backgroundColor: "transparent" }}
									onClick={() => {
										this.handleLoginModalShowHide();
									}}
								/>
							</p> */}
				</Modal.Body>
				<Modal.Footer>
					<Button
						type="submit"
						variant="success"
						className="submitBtn btn-default col-12 text-center"
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
		loginError: state.error,
		redirect: state.redirect,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, password) =>
			dispatch(actions.authLogin(username, password)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
