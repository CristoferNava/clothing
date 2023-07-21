import Button from "../button/button.component";
import { useContext } from "react";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsKeys = [...cartItems.keys()];

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemsKeys.map((key) => {
          return <CartItem key={key} cartItem={cartItems.get(key)} />;
        })}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
