import { Request, Response } from "express";
import * as yup from "yup";

interface IContacts {
  number: string;
}

const schemeValidation: yup.ObjectSchema<IContacts> = yup.object().shape({
  number: yup.string().required(),
});

export const create = async (
  req: Request<{}, {}, IContacts>,
  res: Response
) => {
  let validate: IContacts | undefined;
  try {
    validate = await schemeValidation.validate(req.body);
    console.log(validate);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      error: {
        default: yupError.message,
      },
    });
  }
  return res.send("Create!");
};
