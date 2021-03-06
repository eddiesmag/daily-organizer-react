import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ groups }) => (
	<div className="row">
		{/* <h2>DashBoard</h2> */}
		{groups.map((group) => (
			<ConnectedTaskList
				id={group.id}
				name={group.name}
				key={group.id}
				className="col"
			/>
		))}
	</div>
);

const mapStateToProps = (state) => {
	return {
		groups: state.groups,
	};
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
