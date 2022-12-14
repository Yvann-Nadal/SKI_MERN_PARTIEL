const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String
    },
    imageUrl: {
        type: String
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
    ]
});
module.exports = mongoose.model("Post", postSchema);