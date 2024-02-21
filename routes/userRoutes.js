import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
import checkUserAuth from '../middleware/authmiddleware.js';



//Public Routes
router.post('/register', userController.userRegistration);
router.post('/login', userController.userLogin);
//Protected Routes
router.use(checkUserAuth);
router.post('/changepassword', userController.changePassword);
export default router;