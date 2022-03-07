import mongoose from "mongoose";

const connection = {};

export async function dbConnect() {
  if (connection.isConnected) {
    console.log("connected");
    return;
  }

  const db = await mongoose.connect(
    "mongodb+srv://dbUser:0unakER2iimH1QHH@tagarpkennel.orolp.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
  console.log(connection);
}
