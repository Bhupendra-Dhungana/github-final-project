import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Checkout is Coming Soon!");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <a href="/plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>Unit Price: ${item.price}</p>

                    <p>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button onClick={() => handleDecrease(item)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => handleIncrease(item)}>
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>
                Total Cart Amount: ${totalAmount.toFixed(2)}
              </h2>

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <a href="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
