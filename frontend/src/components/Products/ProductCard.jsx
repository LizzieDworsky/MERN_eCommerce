import { Link } from "react-router-dom";
import placeholderImage from "../../images/placeholder_cat_mom.png";

const ProductCard = ({ product }) => {
    return (
        <Link>
            <div className="product-card">
                <img src={placeholderImage} alt="Product" />
                <h4>{product.name}</h4>
            </div>
        </Link>
    );
};

export default ProductCard;
