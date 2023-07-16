import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { createToken } from "../security/bearer/bearer.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

const format = (document) => {
  return {
    id: document._id,
    username: document.username,
    email: document.email,
    log: document.createdAt,
    update: document.updatedAt,
  };
};

export const signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const duplicate = await User.findOne({
      email,
    });

    if (duplicate)
      return res
        .status(RESPONSE_CODE.BAD_REQUEST)
        .json([RESPONSE_MESSAGE.USER_DUPLICATED]);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      email,
      password: hash,
    });

    const document = await user.save();
    const token = await createToken({ id: document._id });

    res.cookie("token", token);
    return res.status(RESPONSE_CODE.CREATED).json(format(document));
  } catch (error) {
    return res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json([RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR]);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const document = await User.findOne({ email });

    if (!document)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.UNSUCCESSFUL_LOGIN]);

    const isMatch = await bcrypt.compare(password, document.password);

    if (!isMatch)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.UNSUCCESSFUL_LOGIN]);

    const token = await createToken({ id: document._id });

    res.cookie("token", token);
    return res.status(RESPONSE_CODE.OK).json(format(document));
  } catch (error) {
    return res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json([RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR]);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(204);
  } catch (error) {
    return res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json([RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR]);
  }
};
