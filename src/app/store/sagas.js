import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const url = " http://localhost:7777";

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
				isComplete,
				name,
			},
		});
	}
}
