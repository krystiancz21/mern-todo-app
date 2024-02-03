const mongoose = require('mongoose')
const Joi = require("joi")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        required: false
    },
    isDone: {
        type: Boolean,
        required: false
    },
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)
