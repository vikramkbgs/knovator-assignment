// postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateJWT = require('../middleware/authMiddleware');

// Protect routes with authentication middleware
router.use(authenticateJWT);

// CRUD routes for posts
router.post('/create', postController.createPost);
router.get('/location', postController.getPostsByLocation);
router.get('/count', postController.getCountOfActiveAndInactivePosts);
router.get('/:postId', postController.getPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);



module.exports = router;
