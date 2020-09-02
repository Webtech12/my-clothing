import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItems = (payload) => ({
  type: CartActionTypes.ADD_CART_ITEMS,
  payload,
});

export const decreaseCartItems = (payload) => ({
  type: CartActionTypes.DECREASE_CART_ITEMS,
  payload,
});

export const deleteCartItems = (payload) => ({
  type: CartActionTypes.DELETE_CART_ITEMS,
  payload,
});
