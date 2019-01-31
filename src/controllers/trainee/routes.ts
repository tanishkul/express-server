import { config } from "dotenv";
import trainee from "./Controller";
import * as express from "express";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
import { TRAINEEE } from "../../libs/constants";

const traineeRoute: express.Router = express.Router();
console.log("Inside routes.ts");
traineeRoute.get( "/" , authMiddleWare(TRAINEEE, "read") /*, validationHandler(validation.get) */, trainee.get );
traineeRoute.post( "/" , authMiddleWare(TRAINEEE, "write") /*, validationHandler(validation.create) */, trainee.create );
traineeRoute.put( "/" , authMiddleWare(TRAINEEE, "update") /*, validationHandler(validation.update) */, trainee.update );
traineeRoute.delete( "/:id" , authMiddleWare(TRAINEEE, "delete")/* , validationHandler(validation.delete)*/ , trainee.remove );
export default traineeRoute;