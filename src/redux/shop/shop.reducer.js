import SHOP_DATA from "../../pages/shoppage/shop.data";
import ShopActionTypes from "./shop.types";

const initialState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
