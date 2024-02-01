const express = require("express");
const router = express.Router();
const {
    ShoppingCart,
    validateShoppingCart,
} = require("../models/shoppingCart");
const { auth } = require("../middleware/auth");

router.get("/:username", async (req, res) => {
    try {
        let user = req.params.username;
        let shoppingCart = await ShoppingCart.find({ user: user }).populate(
            "product"
        );
        if (shoppingCart.length > 0) {
            return res.status(200).send(shoppingCart);
        } else {
            return res.status(404).send("Cart not found.");
        }
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", auth, async (req, res) => {
    try {
        let data = {
            user: req.user._id,
            product: req.body.product,
        };
        let { error } = validateShoppingCart(data);
        if (error) {
            return res.status(400).send("Invalid body for post request.");
        }

        let newShoppingCart = new ShoppingCart(data);
        await newShoppingCart.save();

        res.status(201).send(newShoppingCart);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
