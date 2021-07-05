import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
	res.send("Hola desde user route");
};

export { getUser };
