const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking.controller');

const endPoint = '/bookings';

router.get(`${endPoint}`, BookingController.getAll)
router.post(`${endPoint}`, BookingController.create)

module.exports = router;