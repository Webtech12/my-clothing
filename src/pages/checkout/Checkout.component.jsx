import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import {
  cartItemsSelector,
  cartItemsTotalSelector,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

const Checkout = ({ cartItems, cartItemsTotal }) => {
  return (
    <div className="checkout-page">
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
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((items) => (
        <CheckoutItem key={items.id} cartItems={items} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartItemsTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  cartItemsTotal: cartItemsTotalSelector,
});

export default connect(mapStateToProps)(Checkout);
