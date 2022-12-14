const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment.controller');

const endPoint = '/comments';

router.get(`${endPoint}`, CommentController.getAll);
router.post(`${endPoint}`, CommentController.create)

module.exports = router;