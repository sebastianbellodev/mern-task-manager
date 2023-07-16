import User from "../models/user.models.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

export const profile = async (req, res) => {
  try {
    const document = await User.findById(req.user.id);

    if (!document)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.USER_NOT_FOUND]);

    return res.status(RESPONSE_CODE.OK).json({
      id: document._id,
      username: document.username,
      email: document.email,
      log: document.createdAt,
      update: document.updatedAt,
    });
  } catch (error) {
    return res
      .sendStatus(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json([RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR]);
  }
};
