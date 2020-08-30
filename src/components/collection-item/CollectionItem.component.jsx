import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/CustomButton.component";
import { connect } from "react-redux";
import { addCartItems } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addCartItems }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItems(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItems: (item) => dispatch(addCartItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
