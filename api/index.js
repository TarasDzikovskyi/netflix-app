const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const {authRouter, userRouter, movieRouter, listRouter} = require('./routes')

mongoose
    .connect('mongodb+srv://root:root@cluster0.zmoyzer.mongodb.net/netflix?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    })
    .then(() => console.log('DB Connected Successfully!'))
    .catch((e) => console.log(e))

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

app.listen(8800, () => {
    console.log(`Server is running on port 8800!`);
})

// 192.168.145.238