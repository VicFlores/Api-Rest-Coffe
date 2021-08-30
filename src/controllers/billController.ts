import { Request, Response } from 'express';
import { Ibill } from '../interfaces/Ibill';
import Bill from '../models/Bill';

const getBill = async (req: Request, res: Response) => {
  try {
    const billDB = await Bill.find({});
    res.status(200).json(billDB);
  } catch (error) {
    res.status(400).json({ message: `Error in get bill ${error}` });
  }
};

const postBill = async (req: Request, res: Response) => {
  try {
    const body: Ibill = req.body;
    const bill = {
      id_Product: body.id_Product,
      id_Employee: body.id_Employee,
      amount: body.amount,
    };

    const billDB = await Bill.findById(bill.id_Product);
    const newBill = await new Bill(bill);

    res.status(200).json();
  } catch (error) {
    res.status(400).json({ message: `Error in post bill ${error}` });
  }
};

const deleteBill = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const billDB = await Bill.findByIdAndDelete(id);
    res.status(200).json({ message: 'Bill was deleted' });
  } catch (error) {
    res.status(400).json({ message: `Error in delete bill ${error}` });
  }
};

export { getBill, postBill, deleteBill };
