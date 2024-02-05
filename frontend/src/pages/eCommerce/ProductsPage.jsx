import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../../components/Products/ProductsList";

export const getAllProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/products");
        return response.data;
    } catch (error) {
        console.warn(`Error in getAllProducts request: ${error}`);
    }
};

const ProductsPage = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState(data);

    console.log(products);
    return (
        <div className="products-page">
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
