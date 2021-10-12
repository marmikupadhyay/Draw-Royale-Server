import express, { Application, Router } from "express";
import * as path from "path";

import Connect from "./connect";

import errorMiddleware from "./Middlewares/error.middleware";
import authMiddleware from "./Middlewares/auth.middleware";

import AppInitialiser from "./Interfaces/misc/appInitialiser.interface";
import Controller from "./Interfaces/controller/controller.interface";

class App {
  public app: Application;
  private port: number;
  private baseUrl: string;

  constructor({ baseUrl, controllers, dbUrl, port }: AppInitialiser) {
    this.app = express();
    this.port = port;
    this.baseUrl = baseUrl;

    this.connectToDatabase(dbUrl);
    this.initialiseMiddlewares();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandlerMiddleware();
  }

  private connectToDatabase(dbUrl: string) {
    Connect({ db: dbUrl });
  }

  private initialiseMiddlewares() {
    // Body Parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Static Files
    this.app.use(
      this.baseUrl + "/static",
      express.static(path.join(__dirname, "..", "public"))
    );

    // cors
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  }

  private initialiseControllers(controllers: Controller[]) {
    const protectedRouter = Router();
    const unprotectedRouter = Router();
    controllers.forEach((controller) => {
      if (controller.isProtected) {
        protectedRouter.use(controller.router);
      } else {
        unprotectedRouter.use(controller.router);
      }
    });
    this.app.use(this.baseUrl, unprotectedRouter);
    this.app.use(this.baseUrl, authMiddleware, protectedRouter);
  }

  private initialiseErrorHandlerMiddleware() {
    this.app.use(errorMiddleware);
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default App;
