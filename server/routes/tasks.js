const express = require('express')
const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

const router = express.Router()

// GET all tasks
router.get('/', getTasks)

// GET single task
router.get('/:id', getTask)

// POST a new task
router.post('/', createTask)

// DELETE a task
router.delete('/:id', deleteTask)

// UPDATE a task ?patch?
router.put('/:id', updateTask)

module.exports = router
