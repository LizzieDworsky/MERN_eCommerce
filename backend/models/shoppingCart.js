const { Schema, model } = require("mongoose");
const Joi = require("joi");

const shoppingCartSchema = new Schema({
    user: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
});

const ShoppingCart = model("ShoppingCart", shoppingCartSchema);

const validateShoppingCart = (data) => {
    const schema = Joi.object({
        user: Joi.string().required(),
        product: Joi.string().hex().length(24).required(),
    });
    return schema.validate(data);
};

module.exports = { ShoppingCart, validateShoppingCart };