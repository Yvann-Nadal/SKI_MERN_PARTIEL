const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String
    },
    imageUrl: {
        type: String,
        default: "https://aeroports-de-lyon.imgix.net/sites/default/files/2021-11/ski_montagne.jpg?fit=max&ixlib=php-3.3.1&w=900&s=d96ffbd9da10aa24f02d3d2105ea3a0c"
    },
    weight: {
        type: Number
    },
    size: {
        type: Number
    },
    style: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    bookings: [
        {
            type: Schema.Types.ObjectId,
            ref: "Booking"
        }
    ],
    shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop"
    }

});
module.exports = mongoose.model("Post", postSchema);