export const defaultState = {
	users: [
		{
			id: "U1",
			name: "dev",
		},
		{
			id: "U2",
			name: "foo",
		},
	],
	groups: [
		{
			name: "To Do",
			id: "G1",
			owner: "U1",
		},
		{
			name: "Doing",
			id: "G2",
			owner: "U1",
		},
		{
			name: "Done",
			id: "G3",
			owner: "U1",
		},
	],
	tasks: [
		{
			name: "Do test",
			id: "T1",
			group: "G1",
			owner: "U1",
			isComplete: false,
		},
		{
			name: "Meet CEO",
			id: "T2",
			group: "G1",
			owner: "U1",
			isComplete: true,
		},
		{
			name: "Write tests",
			id: "T3",
			group: "G2",
			owner: "U2",
			isComplete: false,
		},
		{
			name: "Update component snapshots",
			id: "T4",
			group: "G2",
			owner: "U1",
			isComplete: true,
		},
		{
			name: "Production optimizations",
			id: "T5",
			group: "G3",
			owner: "U1",
			isComplete: false,
		},
	],
	comments: [
		{
			owner: "U1",
			id: "C1",
			content: "Greate work",
		},
	],
};
