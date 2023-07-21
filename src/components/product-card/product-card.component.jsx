import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addCartItem } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`Image of the product ${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addCartItem(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
