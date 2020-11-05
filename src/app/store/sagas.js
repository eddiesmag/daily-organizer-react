import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { history } from "./history";

const url =
	process.env.NODE_ENV == "production" ? "" : " http://localhost:7777";

export function* taskCreationSaga() {
	while (true) {
		const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
		const ownerID = "U1";
		const taskID = uuidv4();

		yield put(mutations.createTask(taskID, groupID, ownerID));

		const { res } = yield axios.post(url + `/task/new`, {
			task: {
				id: taskID,
				group: groupID,
				owner: ownerID,
				isComplete: false,
				name: "New Task",
			},
		});
	}
}

export function* taskModificationSaga() {
	while (true) {
		const { taskID, isComplete, groupID, name } = yield take([
			mutations.SET_TASK_COMPLETE,
			mutations.SET_TASK_GROUP,
			mutations.SET_TASK_NAME,
		]);

		axios.post(url + "/tasks/update", {
			task: {
				id: taskID,
				group: groupID,
				isComplete: isComplete,
				name: name,
			},
		});
	}
}

export function* userAuthenticationSaga() {
	while (true) {
		const { username, password } = yield take(
			mutations.REQUEST_AUTHENTICATE_USER
		);

		try {
			const { data } = yield axios.post(url + `/authenticate`, {
				username,
				password,
			});
			if (!data) {
				throw new Error();
			}
			console.log("Authenticated", data);
			yield put(mutations.setState(data.state));
			yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
			history.push("/dashboard");
		} catch (e) {
			console.info("Error", e);
			yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
		}
	}
}
