import { Document } from "mongoose";

export interface Iproduct extends Document {
  productName: string;
  productType: string;
  price: number;
  oz?: number;
  amount: number;
}
