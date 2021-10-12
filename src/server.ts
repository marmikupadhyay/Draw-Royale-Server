import config from "config";
import App from "./app";

import GeneralController from "./Controllers/general.controller";

const app = new App({
  baseUrl: config.get("server.proxy"),
  controllers: [new GeneralController()],
  dbUrl: config.get("db.url"),
  port: config.get("server.port"),
});
app.listen();
