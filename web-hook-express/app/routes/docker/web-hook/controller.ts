import { Request, Response } from "express";

const webhook = async (_req: Request, _res: Response) => {
  console.log(_req.body);
  _res.send({});
};

const health = async (_req: Request, _res: Response) => {
  console.log(_req.body);
  _res.send({});
};

export { webhook, health };
