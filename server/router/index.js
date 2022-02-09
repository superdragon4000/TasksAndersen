const Router = require('express').Router;
const userController = require('../controllers/user.controller');
const taskController = require('../controllers/task.controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/registration', body('email').isEmail(), body('password').isLength({min: 6, max: 32}), userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/deleteuser', authMiddleware, userController.deleteUser);
router.post('/changepassword', authMiddleware, body('password').isLength({min: 6, max: 32}), userController.changePassword);

router.post('/tasks', authMiddleware, taskController.addTask);
router.post('/removetask', authMiddleware, taskController.removeTask);

router.get('/activate/:link',userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.get('/tasks', authMiddleware, taskController.getTasks);

module.exports = router;
