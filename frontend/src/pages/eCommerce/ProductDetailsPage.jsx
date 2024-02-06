import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const getProduct = async (req) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/products/${req.params.productId}`
        );
        return response.data;
    } catch (error) {
        console.warn(`Error in getProduct request:${error}`);
    }
};

const ProductDetailsPage = () => {
    const data = useLoaderData();
    const [product, setProduct] = useState(data);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetailsPage;
