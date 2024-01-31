require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./db/db");

const products = require("./routes/products");
const shoppingCart = require("./routes/shoppingCart");

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

app.use("/api/products", products);
app.use("/api/shoppingCart", shoppingCart);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
