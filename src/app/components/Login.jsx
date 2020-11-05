import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

export const LoginComponent = ({ authenticateUser, authenticated }) => {
	return (
		<div className="card p-3 col-6">
			<h2>Please Login</h2>
			<form onSubmit={authenticateUser}>
				<input
					type="text"
					placeholder="username"
					name="username"
					defaultValue="dev"
					className="form-control"
				/>
				<input
					type="password"
					placeholder="password"
					name="password"
					defaultValue=""
					className="form-control mt-2"
				/>
				{authenticated === mutations.NOT_AUTHENTICATED ? (
					<p>Login incorrect</p>
				) : null}
				<button type="submit" className="form-control mt-2 btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = ({ session }) => ({
	authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
	authenticateUser(e) {
		e.preventDefault();
		let username = e.target[`username`].value;
		let password = e.target[`password`].value;
		dispatch(mutations.requestAuthenticateUser(username, password));
	},
});

export const ConnectedLogin = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);
