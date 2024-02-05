import { Link } from "react-router-dom";

const ProductCard = ({ product, placeholder }) => {
    return (
        <Link>
            <div className="product-card">
                <img src={placeholder} alt="Product" />
                <h4>{product.name}</h4>
            </div>
        </Link>
    );
};

export default ProductCard;
