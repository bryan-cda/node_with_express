import express from "express";
import connectOnDatabase from "./config/dbconnection.js";
import routes from "./routes/index.js";

const connection = await connectOnDatabase();
connection.on("error", (erro) => {
    console.error("connection error", erro)
});

connection.once("open", () => {
    console.log("success on connect database");
});

const app = express();
routes(app);

export default app;
