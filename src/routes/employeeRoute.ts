import { Router } from "express";
import {
	deleteEmployee,
	getEmployees,
	postEmployee,
	putEmployee,
} from "../controllers/employeeController";

export const employeeRoute = (router: Router) => {
	router.get("/api/employees", getEmployees);
	router.post("/api/add-employee", postEmployee);
	router.put("/api/update-employee/:id", putEmployee);
	router.delete("/api/delete-employee/:id", deleteEmployee);
};
