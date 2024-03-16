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
  const { taskName, status } = req.body;
  const expectedStatus = status || 'pending';
  let data;
  try {
    data = await Task.create({ taskName, status: expectedStatus });
  } catch (err) {
    console.log(err);
  }
  res.status(200).send({ data });
};

module.exports = { getAllTasks, createTask };
