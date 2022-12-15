const express = require('express');
const router = express.Router();
const ShopController = require('../controllers/shop.controller.js');

const endPoint = '/shops';

router.get(`${endPoint}`, ShopController.getAll)
router.post(`${endPoint}`, ShopController.create)


module.exports = router;