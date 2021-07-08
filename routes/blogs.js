const express = require('express');
const router = express.Router();
const blogApi = require('../controllers/api/blogs_api');
router.get('/list', blogApi.list);
router.get('/:id', blogApi.saveBlogs);
router.post('/save', blogApi.saveBlogs);
module.exports = router;
