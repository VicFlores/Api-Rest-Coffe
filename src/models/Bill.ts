import { Schema, model } from 'mongoose';
import { Ibill } from '../interfaces/Ibill';

const billSchema = new Schema({
  id_Product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  id_Employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  amount: { type: Number, required: true },
});

export default model<Ibill>('Bill', billSchema);
