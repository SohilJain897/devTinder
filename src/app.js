const express = require('express');
const connectDb = require('./config/database');
const User = require('./models/user');
const app = express();

app.use(express.json()); // to parse JSON body

app.post("/signup", async (req, res) => {
    try {
        const user = new User({
            firstName: "Virat",
            lastName: "Kohli",
            emailId: "ViratKohli@gmaiil.com",
            Password: "IPL2025"
        });

        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        res.status(500).json({ error: "User creation failed", details: err.message });
    }
});

connectDb()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch((err) => {
        console.log("Database could not be connected");
        console.error(err);
    });
