const express = require('express')
const router = express.Router()
const {signupUser,signinUser,allUsers} = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

// router.route("/").get(allUsers);
router.route("/").post(signupUser).get(protect,allUsers);
router.route("/login").post(signinUser);

module.exports = router;