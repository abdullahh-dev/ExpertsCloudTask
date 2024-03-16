const { Task } = require('../models');

const getAllTasks = async (req, res) => {};

const createTask = async (req, res) => {
  //   const { taskName, status } = req.body;
  await newTask.save();
  console.log(newTask.toJSON());
};

module.exports = { getAllTasks, createTask };
