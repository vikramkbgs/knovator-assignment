// postController.js
const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, body, location } = req.body;
        const createdBy = req.user._id; // Assuming user ID is stored in req.user
        const post = new Post({ title, body, location, createdBy });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const { title, body, location } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(postId, { title, body, location }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getPostsByLocation = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        // Assuming you have a method to query posts based on location
        const posts = await Post.find({ 'location.coordinates': { $near: { $geometry: { type: 'Point', coordinates: [longitude, latitude] } } } });
        res.json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// postController.js
exports.getCountOfActiveAndInactivePosts = async (req, res) => {
    try {
        const activeCount = await Post.countDocuments({ active: true });
        const inactiveCount = await Post.countDocuments({ active: false });
        res.json({ activeCount, inactiveCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = exports;
