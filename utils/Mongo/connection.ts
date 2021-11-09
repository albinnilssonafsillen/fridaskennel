import { MongoClient } from "mongodb";

export function initMongo() {
  const client = new MongoClient(
    "mongodb+srv://DBUSER:TYtvWl8wjPRjuKvb@tagarpkennel.orolp.mongodb.net/fridaskennel?retryWrites=true&w=majority"
  );
  console.log(client);

  const collection = client.db();

  return collection;
}

