const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, validateUser, validateLogin } = require("../models/user");

//Handles registration POST request
router.post("/register", async (req, res) => {
    try {
        //* 1. Validate Request Data ---
        const { error } = validateUser(req.body);
        if (error) {
            return res.status(400).send("Invalid registration data.");
        }

        //* 2. Check if user is already registered ---
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).send("User already registered.");
        }

        const salt = await bcrypt.genSalt(10); // Encryption/Hash level

        //* 3. Register the user and save to database ---
        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
        });
        await user.save();

        //* 4. Generate a JWT with user-specific information using the secret key ---
        const token = user.generateAuthToken();

        //* Include the JWT in the response headers and send user details ---
        res.status(201)
            .header("x-auth-token", token)
            .header("access-control-expose-headers", "x-auth-token")
            .send({
                _id: user._id,
                username: user.username,
                email: user.email,
            });
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
