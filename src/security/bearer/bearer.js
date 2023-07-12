import jwt from "jsonwebtoken";
import { BEARER_KEY } from "./config/config.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "../../tools/message.js";

export const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, BEARER_KEY, { expiresIn: "2h" }, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });
};

export const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return send(res, RESPONSE_CODE.FORBIDDEN, RESPONSE_MESSAGE.FORBIDDEN);

  jwt.verify(token, BEARER_KEY, (error, user) => {
    if (error)
      return send(res, RESPONSE_CODE.FORBIDDEN, RESPONSE_MESSAGE.FORBIDDEN);

    req.user = user;
    next();
  });
};
