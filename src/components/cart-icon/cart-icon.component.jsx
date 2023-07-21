import { useContext, useState, useEffect } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    let numberOfItems = 0;
    for (const cartItem of cartItems.values()) {
      numberOfItems += cartItem.quantity;
      setItemCount(numberOfItems);
    }
  }, [cartItems]);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
