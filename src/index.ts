import express, { Application, json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./database/connection";
import { userRoute } from "./routes/userRoute";

const app: Application = express();
dotenv.config({ path: "./.env" });

//Settings
app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

//Routes
userRoute(app);

//Server

const main = async () => {
	try {
		await app.listen(app.get("port"));
		console.info(`Server running on port ${app.get("port")}`);
		connection();
	} catch (error) {
		throw new Error(`Server error ${error}`);
	}
};

main();
