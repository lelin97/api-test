import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware/validation";

interface IUsers {
  name: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IUsers>(
    yup.object().shape({
      name: yup.string().required(),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IUsers>, res: Response) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Nothing!");
};
