import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

export const LoginComponent = ({ authenticateUser, authenticated }) => {
	return (
		<div>
			<h2>Please Login</h2>
			<form onSubmit={authenticateUser}>
				<input
					type="text"
					placeholder="username"
					name="username"
					defaultValue="dev"
				/>
				<input
					type="password"
					placeholder="password"
					name="password"
					defaultValue=""
				/>
				{authenticated === mutations.NOT_AUTHENTICATED ? (
					<p>Login incorrect</p>
				) : null}
				<button>Login</button>
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
