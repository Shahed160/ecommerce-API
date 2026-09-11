const express  = require('express');
const router = express.Router();
const {getallUsers,createNewUser,findUserByRole} = require('../controllers/productController');

router.get('/product', getallUsers);
router.post('/product',createNewUser);
router.post('/product/role',findUserByRole);


module.exports = router;