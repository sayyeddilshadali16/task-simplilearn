import dotenv from "dotenv";
import {app} from "./app.js"
import express from "express";

dotenv.config({ path: "./.env" });

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();