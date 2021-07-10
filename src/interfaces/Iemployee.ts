import { Document } from "mongoose";

export interface Iemployee extends Document {
  fullName: string;
  carnet: string;
  email: string;
  password: string;
}
