import webhookRoute from "./web-hook/route";
import { IRoutes, IRoute } from "../../types";

const routes: IRoutes = [
  {
    url: "web-hook",
    route: webhookRoute,
  },
];

export default routes.map((e: IRoute) => {
  e.url = `docker/${e.url}`;
  return e;
});
