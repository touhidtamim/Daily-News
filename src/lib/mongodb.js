import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Dev mode: hot reload er jonno cached client
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
