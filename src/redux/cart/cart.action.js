import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItems = (payload) => ({
  type: CartActionTypes.ADD_CART_ITEMS,
  payload,
});
