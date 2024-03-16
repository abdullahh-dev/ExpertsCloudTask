const express = require('express');
const router = express.Router();
const task = require('../controller/taskController');

router.route('/getAllTasks').get(task.getAllTasks);
router.route('/createTask').post(task.createTask);
router.route('/updateTask/:id').patch(task.updateTask);
router.route('/deleteTask/:id').delete(task.deleteTask);
module.exports = router;
