const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authControllers');
const verifyToken = require('../middlewares/authMiddleware');
const authController = require('../controllers/authControllers');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserInfo);

module.exports = router;
