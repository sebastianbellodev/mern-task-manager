import Task from "../models/task.models.js";
import { send, RESPONSE_CODE, RESPONSE_MESSAGE } from "../tools/message.js";

export const getTasks = async (req, res) => {
  const document = await Task.find();

  return res.status(RESPONSE_CODE.OK).json(document);
};

export const getTask = async (req, res) => {
  const document = await Task.findById(req.params.id);

  if (!document)
    return send(res, RESPONSE_CODE.NOT_FOUND, RESPONSE_MESSAGE.NOT_FOUND);

  return res.status(RESPONSE_CODE.OK).json(document);
};

export const postTask = async (req, res) => {
  const { title, description, date } = req.body;

  const task = new Task({
    title,
    description,
    date,
  });

  const document = await task.save();

  return res.status(RESPONSE_CODE.CREATED).json(document);
};

export const deleteTask = async (req, res) => {};

export const putTask = async (req, res) => {};
