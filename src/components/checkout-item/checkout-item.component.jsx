import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`Image of the product ${name}`} />
      </div>
      <span className="quantity">{quantity}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQuantity(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="price">${parseInt(quantity) * parseInt(price)}</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
