import mongoose from "mongoose";

const mongoUrl = process.env.ATLAS_URI || "mongodb://localhost:27017/";


mongoose.connect(mongoUrl, {dbName: "green-feast"}).then(() => {
})

const database = mongoose.connection;


database.on("error", (e) => {
  console.log(e);
})

database.once('connected', () => {
  console.log('Database connected');
});


