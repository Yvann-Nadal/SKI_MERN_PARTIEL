const Post = require('../models/post.model');
const Shop = require('../models/shop.model');

const PostController = {
    getAll: async (req, res) => {
        try {
            const posts = await Post.find().populate('comments').populate('bookings');
            res.send(posts)
        } catch (err) {
            res.status(404).send(err, 'Something went wrong')
        }
    },
    getOne: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('comments').populate('bookings');
            res.send(post)
        } catch (error) {
            res.status(404).send(error, 'Something went wrong')
        }
    },
    create: async (req, res) => {
        try {
            const post = new Post(req.body);
            const newPost = await post.save();
            const shop = await Shop.findById(req.body.shop);
            shop.posts.push(post);
            await shop.save();
            res.send(newPost)
        } catch (error) {
            res.status(400).send(error, 'Something went wrong')
        }
    },
    update: async (req, res) => {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.send(post)
        } catch (error) {
            res.status(400).send(error, 'Something went wrong')
        }
    },
    delete: async (req, res) => {
        try {
            await Post.findByIdAndDelete(req.params.id);
            res.status(204).send({ message: 'Post deleted successfully' })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = PostController