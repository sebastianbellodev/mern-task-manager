import { send, RESPONSE_CODE } from "../tools/message.js";

export const validateData = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return send(res, RESPONSE_CODE.BAD_REQUEST).json(
      error.errors.map((error) => error.message)
    );
  }
};
