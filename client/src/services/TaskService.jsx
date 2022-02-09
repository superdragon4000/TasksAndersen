import $api from '../http';

export default class TaskService {
    static async getTasks() {
        return $api.get('/tasks');
    }

    static async addTask(value) {
        return $api.post('/tasks', {value: value});
    }

    static async removeTask(id) {
        return $api.post('/removetask', {taskId: id})
    }
}