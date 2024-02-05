import ProductCard from "./ProductCard";
import placeholderImageOne from "../../images/placeholder_cat_mom.png";
import placeholderImageTwo from "../../images/placeholder_candle.png";
import "./Products.css";

const ProductsList = ({ products }) => {
    const getPlaceholderImage = (index) => {
        return index % 2 === 0 ? placeholderImageOne : placeholderImageTwo;
    };

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    placeholder={getPlaceholderImage(index)}
                />
            ))}
        </div>
    );
};

export default ProductsList;
