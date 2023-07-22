import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsValues = [...cartItems.values()];

  let total = cartItemsValues.reduce(
    (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItemsValues.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </tbody>
      </table>
      <h2>TOTAL: ${total}</h2>
    </div>
  );
};

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
    useContext(CartContext);

  return (
    <tr>
      <td>
        <img src={imageUrl} alt={`Image of the product ${name}`} />
      </td>
      <td>{name}</td>
      <td>
        <button onClick={() => decreaseItemQuantity(id)}>&lt;</button>
        {quantity}
        <button onClick={() => increaseItemQuantity(id)}>&gt;</button>
      </td>
      <td>{price}</td>
      <td>{parseInt(quantity) * parseInt(price)}</td>
      <td>
        <button onClick={() => removeItem(id)}>X</button>
      </td>
    </tr>
  );
};

export default Checkout;
