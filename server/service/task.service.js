const TaskModel = require('../models/task.model');
// const ApiError = require('../exceptions/api.error');


class TaskService {
    async addTask(user, value) {
        const task = await TaskModel.create({user, value});
        return task;
    }

    async getTasks(user) {
        const tasks = await TaskModel.find({user: user});
        return tasks;
    }

    async removeTask(user, taskId) {
        const taskData = await TaskModel.deleteOne({user: user, _id: taskId});
        return taskData;
    }
}

module.exports = new TaskService();