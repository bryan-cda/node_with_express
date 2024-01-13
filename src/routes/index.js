import express from "express";
import bookRoutes from "./bookRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Welcome to Node with Express"));

    app.use(express.json(), bookRoutes);
};

export default routes;