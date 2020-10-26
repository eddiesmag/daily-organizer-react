import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/dailyorganizer";

let db = null;
export async function connectDB() {
	if (db) return db;
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.log(`got db`, db)
	return db;
}
