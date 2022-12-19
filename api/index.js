const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const {sequelize} = require('./models/models')

dotenv.config()
const {authRouter, userRouter, movieRouter, listRouter} = require('./routes')

async function db_connect() {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({force: true})
        console.log('Connection to DB successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

db_connect()

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