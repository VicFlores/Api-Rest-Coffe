import { Schema, model } from 'mongoose';
import { Iproduct } from '../interfaces/Iproduct';

enum productTypes {
  water,
  soda,
  salad,
  coffe,
  salty,
  sweet,
  pizza,
  sandwich,
}

const productSchema = new Schema({
  productName: { type: String, required: true },
  productType: { type: String, enum: productTypes, required: true },
  price: { type: Number, required: true },
  oz: { type: Number },
  amount: { type: Number, required: true },
});

export default model<Iproduct>('Product', productSchema);
