const express = require('express');
const router = express.Router();
const task = require('../controller/taskController');

router.route('/tasks').get(task.getAllTasks);
router.route('/createTask').post(task.createTask);

module.exports = router;
