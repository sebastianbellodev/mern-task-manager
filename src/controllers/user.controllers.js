import User from "../models/user.models.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

export const profile = async (req, res) => {
  const document = await User.findById(req.user.id);

  if (!document)
    return send(
      res,
      RESPONSE_CODE.NOT_FOUND,
      RESPONSE_MESSAGE.UNSUCCESSFUL_LOGIN
    );

  return res.status(RESPONSE_CODE.OK).json({
    id: document._id,
    username: document.username,
    email: document.email,
    log: document.createdAt,
    update: document.updatedAt,
  });
};
