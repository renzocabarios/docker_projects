import "express-async-errors";
import express, { Express } from "express";
import connectDB from "./app/db";
import { DB_CONNECTION, API_PORT } from "./app/env";
import { addRoutes } from "./app/routes";
import { addMiddlewares } from "./app/middlewares";

const app: Express = express();

//initialization
const start = () => {
  addMiddlewares(app);
  addRoutes(app);

  app.use(function (err: any, req: any, res: any, next: any) {
    res.status(403);
    res.json({
      data: [],
      status: "fail",
      message: "Something wrong with the server",
    });
  });

  connectDB(DB_CONNECTION).then(() => {
    console.log(`Database connected to ${DB_CONNECTION}`);

    app.listen(API_PORT, () => {
      console.log(`Server started on port ${API_PORT}`);
    });
  });
};

start();
