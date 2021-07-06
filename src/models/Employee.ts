import { Schema, model } from "mongoose";
import { Iemployee } from "../interfaces/Iemployee";

const employeeSchema = new Schema({
	fullName: { type: String, required: true },
	carnet: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

export default model<Iemployee>("Employee", employeeSchema);
