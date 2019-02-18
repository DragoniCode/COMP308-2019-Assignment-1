let express = require('express');
let router = express.Router();

let aboutController = require('../controllers/about');

/* GET About List page - READ Operation */
router.get('/', aboutController.displayAboutPage);


module.exports = router;