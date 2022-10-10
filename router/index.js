const router = require('express').Router();
const loginController = require('../controller/index');
const dataJSON = require('../controller/data');
const authentication = require('../middleware/auth');

router.post('/login', loginController.userLogin);
router.get('/data', authentication, dataJSON.getDataJSON);

module.exports = router;
