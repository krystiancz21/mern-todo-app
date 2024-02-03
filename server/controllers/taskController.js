const Task = require('../models/taskModel')

// get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).sort({ createdAt: -1 })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(422).json(error);
    }
}

// get single task
const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post a new task
const createTask = async (req, res) => {
    try {
        await new Task({ ...req.body }).save()
        res.status(201).send({ message: "Task created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a task
const deleteTask = async (req, res) => {
    try {
        const item = await Task.findOneAndRemove({ _id: req.params.id });
        if (!item) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// update a task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}