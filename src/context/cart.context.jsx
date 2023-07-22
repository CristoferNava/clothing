import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: new Map(),
  addCartItemHandler: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(new Map());
  const addCartItem = (product) => {
    if (!cartItems.has(product.id)) {
      cartItems.set(product.id, { ...product, quantity: 0 });
    }
    const currentProduct = cartItems.get(product.id);
    currentProduct.quantity += 1;
    setCartItems(new Map(cartItems));
  };

  const increaseItemQuantity = (productId) => {
    cartItems.get(productId).quantity += 1;
    setCartItems(new Map(cartItems));
  };

  const decreaseItemQuantity = (productId) => {
    const quantity = cartItems.get(productId).quantity;
    if (quantity === 0) return;
    cartItems.get(productId).quantity -= 1;
    setCartItems(new Map(cartItems));
  };

  const removeItem = (productId) => {
    console.log("I am remove item");
    cartItems.delete(productId);
    setCartItems(new Map(cartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addCartItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
