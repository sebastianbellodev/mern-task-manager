import basicAuth from "basic-auth";
import { BASIC_USERNAME, BASIC_PASSWORD } from "./config/config.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "../../tools/message.js";

export const validateBasic = (req, res, next) => {
  const auth = basicAuth(req);
  if (!auth) {
    res.set("WWW-Authenticate", 'Basic realm ="Secure"');
    return res
      .status(RESPONSE_CODE.UNAUTHORIZED)
      .json([RESPONSE_MESSAGE.UNAUTHORIZED]);
  } else {
    if (verifyBasic(auth.name, auth.pass)) {
      next();
    } else {
      res.set("WWW-Authenticate", 'Basic realm ="Secure"');
      return res
        .status(RESPONSE_CODE.UNAUTHORIZED)
        .json([RESPONSE_MESSAGE.UNAUTHORIZED]);
    }
  }
};

function verifyBasic(username, password) {
  return username === BASIC_USERNAME && password === BASIC_PASSWORD;
}
