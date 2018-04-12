const express       = require('express');
const router        = express.Router();
const util=require('../../util/util');
const userController=require('../../controllers/userController');
const informationController=require('../../controllers/informationController');

router.post('/reg',userController.add);
router.post('/login',userController.login);
router.get('/user/:id',userController.getUser);
router.post('/user/:id',userController.updateUser);

router.post('/addinformation',informationController.add);
router.get('/showinformation',informationController.show);

router.get('/information/:id',informationController.detail)

router.post('/img',util.uploadImg);
router.post('/email',util.sendEmail)
module.exports = router;
	