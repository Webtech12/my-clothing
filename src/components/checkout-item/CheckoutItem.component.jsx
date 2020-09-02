import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  deleteCartItems,
  addCartItems,
  decreaseCartItems,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItems, dispatch }) => {
  const { id, name, price, quantity, imageUrl } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(decreaseCartItems(cartItems))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={() => dispatch(addCartItems(cartItems))}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => dispatch(deleteCartItems(id))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
