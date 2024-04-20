// postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateJWT = require('../middleware/authMiddleware');

// Protect routes with authentication middleware
router.use(authenticateJWT);

// CRUD routes for posts
router.post('/create', postController.createPost);
router.get('/:postId', postController.getPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);
router.get('/location', postController.getPostsByLocation);


module.exports = router;
