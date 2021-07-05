import { Router } from "express";
import { getUser } from "../controllers/userController";

export const userRoute = (router: Router) => {
	router.get("/api/user", getUser);
};
