import Task from "../models/task.models.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

const format = (document) => {
  return {
    id: document._id,
    title: document.title,
    description: document.description,
    log: document.createdAt,
    update: document.updatedAt,
    user: {
      id: document.user._id,
      username: document.user.username,
      email: document.user.email,
      log: document.user.createdAt,
      update: document.user.updatedAt,
    },
  };
};

export const getTasks = async (req, res) => {
  try {
    const array = await Task.find({
      user: req.user.id,
    }).populate("user");

    let document = [];

    Object.values(array).map((value) => {
      document.push(format(value));
    });

    return res.status(RESPONSE_CODE.OK).json(document);
  } catch (error) {
    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json([error]);
  }
};

export const getTask = async (req, res) => {
  try {
    const document = await Task.findById(req.params.id).populate("user");

    if (!document)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.TASK_NOT_FOUND]);

    return res.status(RESPONSE_CODE.OK).json(format(document));
  } catch (error) {
    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json([error]);
  }
};

export const postTask = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const task = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });

    const document = await task.save();

    return res.status(RESPONSE_CODE.CREATED).json({
      id: document._id,
      title: document.title,
      description: document.description,
      log: document.createdAt,
      update: document.updatedAt,
    });
  } catch (error) {
    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json([error]);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const document = await Task.findByIdAndDelete(req.params.id);

    if (!document)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.TASK_NOT_FOUND]);

    return res.sendStatus(RESPONSE_CODE.NO_CONTENT);
  } catch (error) {
    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json([error]);
  }
};

export const putTask = async (req, res) => {
  try {
    const document = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("user");

    if (!document)
      return res
        .status(RESPONSE_CODE.NOT_FOUND)
        .json([RESPONSE_MESSAGE.TASK_NOT_FOUND]);

    return res.status(RESPONSE_CODE.OK).json(format(document));
  } catch (error) {
    return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json([error]);
  }
};
