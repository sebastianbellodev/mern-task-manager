import { USERNAME, PASSWORD } from "../data/config/config.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

export const login = (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
      return res.status(RESPONSE_CODE.OK).json({ username, password });
    }

    return res
      .status(RESPONSE_CODE.NOT_FOUND)
      .json([RESPONSE_MESSAGE.USER_NOT_FOUND]);
  } catch (error) {
    return res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json([RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR]);
  }
};
