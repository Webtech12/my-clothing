import React from "react";
import { connect } from "react-redux";

// import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection-page.styles.scss";

const CategoryPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>Category Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
