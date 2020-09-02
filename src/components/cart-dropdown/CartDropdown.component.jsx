import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const cartItemsList = cartItems.length ? (
    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
  ) : (
    <span className="empty-message">Cart is empty</span>
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItemsList}</div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
