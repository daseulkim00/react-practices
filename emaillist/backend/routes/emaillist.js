const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').options((req, res, next) => {
    console.log('options request!!!!');

    res
        .set('Access-Control-Allow-Origin', req.headers.origin) 
        .set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers')) 
        .set('Access-Control-Allow-Method',  req.get('Access-Control-Request-Method'))  // Access-Control-Allow-Method: DELETE,POST 등등 다 써줄 수 없으니 니가 요청하는거 모든거 허용해줄게 
        .set('Access-Control-Allow-Credentials' , true)
        .send();

});
router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;