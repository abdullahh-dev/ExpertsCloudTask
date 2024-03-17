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

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const [updatedRowsCount] = await Task.update(
      { status: 'completed' },
      { where: { id: taskId } }
    );
    const updatedTask = await Task.findOne({ where: { id: taskId } });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    console.log(updateTask, 'Updated Task');
    return res
      .status(200)
      .json({ message: 'Task updated successfully', updatedTask });
  } catch (error) {
    console.error('Error updating task:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedRowsCount = await Task.destroy({ where: { id: taskId } });
    if (deletedRowsCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
