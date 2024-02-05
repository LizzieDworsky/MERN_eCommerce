import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
