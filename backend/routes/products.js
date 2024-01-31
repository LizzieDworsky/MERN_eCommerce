const express = require("express");
const router = express.Router();
const { Product, validateProduct } = require("../models/product");

router.get("/", async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res
                .status(404)
                .send(`No products found with an ID of ${req.params.id}`);
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", async (req, res) => {
    try {
        let { error } = validateProduct(req.body);
        if (error) {
            return res.status(400).send("Invalid body for post request.");
        }
        let newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.put("/:id", async (req, res) => {
    try {
        res.status(200).send("Put Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.status(204).send("");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
