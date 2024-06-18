import DOCKER from "./docker";
import { Express } from "express";

export const addRoutes = (app: Express) => {
  [...DOCKER].forEach((route) => {
    app.use(`/api/${route.url}`, route.route);
  });
};
