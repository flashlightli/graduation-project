
const express       = require('express');
const router        = express.Router();
const applicationController = require('../../controllers/applicationController');
const userController=require('../../controllers/userController');

// router.get('/applicationlist',applicationController.list);
// router.post('/application',applicationController.add);
// router.delete('/application',applicationController.delete);
// router.put('/application',applicationController.update);

router.post('/reg',userController.add);
router.post('/login',userController.login);
router.get('/user/:id',userController.getUser);
module.exports = router;
	