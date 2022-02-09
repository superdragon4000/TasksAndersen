const taskService = require('../service/task.service');
// const ApiError = require('../exceptions/api.error');
const userService = require('../service/user.service');

class TaskController {
    async addTask(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const {value} = req.body;
            const user = await userService.getUser(refreshToken);
            const taskData = await taskService.addTask(user.userDto.id, value);
            return res.json(taskData);
        } catch (error) {
            next(error);
        }
    }

    async getTasks(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const user = await userService.getUser(refreshToken);
            const taskData = await taskService.getTasks(user.userDto.id);
            return res.json(taskData);
        } catch (error) {
            next(error);
        }
    }

    async removeTask(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const {taskId} = req.body;
            const user = await userService.getUser(refreshToken);
            const taskData = await taskService.removeTask(user.userDto.id, taskId);
            return res.json(taskData);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TaskController();