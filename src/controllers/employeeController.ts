import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Employee from "../models/Employee";

const getEmployees = async (req: Request, res: Response) => {
  try {
    const employeeDB = await Employee.find({});
    return res.status(200).json(employeeDB);
  } catch (error) {
    res.status(400).json({ Message: `Error in get employee: ${error}` });
  }
};

const postEmployee = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const employee = {
      fullName: body.fullName,
      carnet: body.carnet,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
    };

    const employeeDB = await Employee.create(employee);
    return res.status(200).json(employeeDB);
  } catch (error) {
    res.status(400).json({ Message: `Error in post employee: ${error}` });
  }
};

const putEmployee = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const employee = {
      fullName: body.fullName,
      email: body.email,
    };

    const id = req.params.id;
    const employeeDB = await Employee.findByIdAndUpdate(id, employee, {
      new: true,
    });
    return res.status(200).json(employeeDB);
  } catch (error) {
    res.status(400).json({ Message: `Error in put employee ${error}` });
  }
};

const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const employeDB = await Employee.findByIdAndDelete(id);
    return res.status(200).json({ Messsage: "Employee was deleted" });
  } catch (error) {
    res.status(400).json({ Messsage: `Error in delete employee ${error}` });
  }
};

export { getEmployees, postEmployee, putEmployee, deleteEmployee };
