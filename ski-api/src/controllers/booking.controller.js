const Booking = require("../models/booking.model.js");
const Post = require("../models/post.model.js");

const BookingController = {
    getAll: async (req, res) => {
        try {
            const bookings = await Booking.find();
            res.send(bookings);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const booking = new Booking(req.body);
            const newBooking = await booking.save();
            const post = await Post.findById(req.body.post);
            post.bookings.push(newBooking._id);
            if (post.bookings.length > 0) {
                post.isAvailable = false;
            }
            await post.save();
            res.send(newBooking);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

}

module.exports = BookingController;