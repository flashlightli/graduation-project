
const express       = require('express');
const router        = express.Router();
const settings      = require(`../../conf/${process.env.NODE_ENV}/settings`);


const testController = require('../../controllers/testController');

router.get('/test', (req, res) => res.send("测试..web."));

router.get('/test/await',testController.await);

module.exports = router;
