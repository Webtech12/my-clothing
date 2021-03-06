import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case CartActionTypes.ADD_CART_ITEMS:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    case CartActionTypes.DELETE_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };

    case CartActionTypes.DECREASE_CART_ITEMS:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
