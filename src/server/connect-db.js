import { MongoClient } from "mongodb";

const url =
	process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/dailyorganizer";
// const prodUrl =
// 	"mongodb+srv://dev:dev@cluster0.71kkl.mongodb.net/dailyorganizer?retryWrites=true&w=majority";

let db = null;
export async function connectDB() {
	if (db) return db;
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	db = client.db();
	console.log(`got db`, db);
	return db;
}
