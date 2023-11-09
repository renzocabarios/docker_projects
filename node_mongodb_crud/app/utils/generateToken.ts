import jwt from "jsonwebtoken";
import { JWT_KEY } from "../env";

export default (payload = {}, expiresIn = "1y") => {
  return jwt.sign(payload, JWT_KEY, { expiresIn });
};
