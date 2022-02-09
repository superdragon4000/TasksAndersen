import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import $api from '../http';
import TaskService from '../services/TaskService';


export default class Store {
    user = {};
    isAuth = false;
    tasks;
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }
    
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await $api.get('/refresh');
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return this.setAuth;
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async getTasks() {
        try {
            const response = await TaskService.getTasks();
            this.tasks = response.data;
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async addTask(value) {
        try {
            await TaskService.addTask(value);
            await this.getTasks();
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async removeTask(id) {
        try {
            await TaskService.removeTask(id);
            await this.getTasks();
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async deleteUser() {
        try {
            await AuthService.deleteUser();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async changePassword(password) {
        try {
            const response = await AuthService.changePassword(password);
            localStorage.setItem('token', response.data.accessToken);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }
}