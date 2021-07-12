import { Request, Response } from 'express';
import { Iproduct } from '../interfaces/Iproduct';
import Product from '../models/Product';

const getProduct = async (req: Request, res: Response) => {
  try {
    const productDB = await Product.find({});
    res.status(200).json(productDB);
  } catch (error) {
    res.status(400).json({ message: `Error in get products ${error}` });
  }
};

const postProduct = async (req: Request, res: Response) => {
  try {
    const body: Iproduct = req.body;

    const product = {
      productName: body.productName,
      productType: body.productType,
      price: body.price,
      oz: body.oz,
      amount: body.amount,
    };

    const productDB = await Product.create(product);
    res.status(200).json(productDB);
  } catch (error) {
    res.status(400).json({ message: `Error in post product ${error}` });
  }
};

const putProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body: Iproduct = req.body;
    const productDB = await Product.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(productDB);
  } catch (error) {
    res.status(400).json({ message: `Error in put product ${error}` });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const productDB = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product was deleted' });
  } catch (error) {
    res.status(400).json({ message: `Error in delete product ${error}` });
  }
};

export { getProduct, postProduct, putProduct, deleteProduct };
