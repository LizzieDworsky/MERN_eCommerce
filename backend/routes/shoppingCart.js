const express = require("express");
const router = express.Router();
const {
    ShoppingCart,
    validateShoppingCart,
} = require("../models/shoppingCart");

router.get("/", async (req, res) => {
    try {
        res.status(200).send("Get all Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", async (req, res) => {
    try {
        res.status(201).send("Post Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
