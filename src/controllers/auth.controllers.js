import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { createToken } from "../security/bearer/bearer.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

export const signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
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
    return res.status(RESPONSE_CODE.CREATED).json({
      id: document._id,
      username: document.username,
      email: document.email,
      log: document.createdAt,
      update: document.updatedAt,
    });
  } catch (error) {
    return send(
      res,
      RESPONSE_CODE.INTERNAL_SERVER_ERROR,
      RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR
    );
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const document = await User.findOne({ email });

    if (!document)
      return send(
        res,
        RESPONSE_CODE.NOT_FOUND,
        RESPONSE_MESSAGE.UNSUCCESSFUL_LOGIN
      );

    const isMatch = await bcrypt.compare(password, document.password);

    if (!isMatch)
      return send(
        res,
        RESPONSE_CODE.NOT_FOUND,
        RESPONSE_MESSAGE.UNSUCCESSFUL_LOGIN
      );

    const token = await createToken({ id: document._id });

    res.cookie("token", token);
    return res.status(RESPONSE_CODE.OK).json({
      id: document._id,
      username: document.username,
      email: document.email,
      log: document.createdAt,
      update: document.updatedAt,
    });
  } catch (error) {
    return send(
      res,
      RESPONSE_CODE.INTERNAL_SERVER_ERROR,
      RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR
    );
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return send(res, RESPONSE_CODE.OK, RESPONSE_MESSAGE.SUCCESSFUL_LOGOUT);
};
