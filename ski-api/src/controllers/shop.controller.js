const Shop = require("../models/shop.model.js");
const Post = require("../models/post.model.js");

const ShopController = {
    getAll: async (req, res) => {
        try {
            const shops = await Shop.find().populate("posts");
            res.send(shops);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const shop = new Shop(req.body);
            const newShop = await shop.save();
            res.send(newShop);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

}

module.exports = ShopController;