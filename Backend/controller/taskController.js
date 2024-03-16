const { Task } = require('../models');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.findAll();
    res.send({ data: allTasks });
  } catch (err) {
    console.log(err);
  }
};

const createTask = async (req, res) => {
  const { taskName } = req.body;

  let data;
  try {
    data = await Task.create({ taskName });
  } catch (err) {
    console.log(err);
  }
  res.status(200).send({ data });
};

module.exports = { getAllTasks, createTask };
