import Controller from "../controller/controller.interface";

interface AppInitialiser {
  baseUrl: string;
  controllers: Controller[];
  dbUrl: string;
  port: number;
}

export default AppInitialiser;
