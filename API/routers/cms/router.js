const express       = require('express');
const router        = express.Router();
const util=require('../../util/util');
const userController=require('../../controllers/userController');
const informationController=require('../../controllers/informationController');
const commentController=require('../../controllers/commentController');
const newsController=require('../../controllers/newsController');

router.post('/reg',userController.add);
router.post('/login',userController.login);
router.get('/user/:id',userController.getUser);
router.post('/user/:id',userController.updateUser);
router.get('/usercheck/:username',userController.check);

router.post('/addinformation',informationController.add);
router.get('/showinformation',informationController.show);
router.get('/userinformation/:id',informationController.select_by_user);
router.get('/userDelinformation/:id',informationController.del_by_user);
router.get('/hotinformation',informationController.hot_select);
router.post('/searchinformation',informationController.search);

router.get('/information/:id',informationController.detail)

router.post('/img',util.uploadImg);
router.post('/email',util.sendEmail)

router.get('/comment/:id',commentController.select);
router.post('/comment',commentController.add);
router.post('/updatecomment',commentController.update);

router.post('/remind',commentController.search);
module.exports = router;
	