const express = require('express');
const app = express();
const connectMongo = require('./config/mongo');
require('dotenv').config()
const cors = require('cors');

const bookingRouter = require('./src/routers/booking.router');
const commentRouter = require('./src/routers/comment.router');
const postRouter = require('./src/routers/post.router');

connectMongo();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', bookingRouter);
app.use('/api', commentRouter);
app.use('/api', postRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})