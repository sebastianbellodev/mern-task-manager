import { RESPONSE_CODE } from "../tools/message.js";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(RESPONSE_CODE.BAD_REQUEST)
      .json(error.errors.map((error) => error.message));
  }
};
