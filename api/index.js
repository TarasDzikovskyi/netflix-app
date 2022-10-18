const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

dotenv.config()
const {authRouter, userRouter, movieRouter, listRouter} = require('./routes')

mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.zmoyzer.mongodb.net/${process.env.MONGODB_DATA}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    })
    .then(() => console.log('DB Connected Successfully!'))
    .catch((e) => console.log(e))

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
})

// 192.168.145.238