import { Router, Request, Response, NextFunction } from "express";
import Controller from "../Interfaces/controller/controller.interface";

class GeneralController implements Controller {
    public path = "";
    public router = Router();
    public isProtected = false;

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes() {
        this.router.get(`${this.path}/status`, this.getStatus);
    }

    private getStatus = (req: Request, res: Response, next: NextFunction) => {
        return res
            .status(200)
            .jsonp({ status: 200, success: true, message: "Api is running !" });
    };
}

export default GeneralController;