import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsValues = [...cartItems.values()];

  let total = cartItemsValues.reduce(
    (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Total</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItemsValues.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <span className="total">TOTAL: ${total}</span>
    </div>
  );
};

export default Checkout;
