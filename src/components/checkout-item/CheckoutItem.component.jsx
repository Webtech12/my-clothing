import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import { deleteCartItems } from "../../redux/cart/cart.action";

const CheckoutItem = ({ id, name, price, quantity, imageUrl, dispatch }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
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
