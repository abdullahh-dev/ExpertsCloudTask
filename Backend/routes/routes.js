const express = require('express');
const router = express.Router();
const task = require('../controller/taskController');

router.route('/getAllTasks').get(task.getAllTasks);
router.route('/createTask').post(task.createTask);
router.route('/updateTask/:id').patch(task.updateTask);

module.exports = router;
