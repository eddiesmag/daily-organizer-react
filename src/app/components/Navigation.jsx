import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Navigation = () => (
	<div>
		<Link to="/dashboard">
			<h1>App Name</h1>
		</Link>
	</div>
);

export const ConnectedNavigation = connect((state) => state)(Navigation);
