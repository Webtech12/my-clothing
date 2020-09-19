import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  const collectionsList = collections.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  ));
  return <div className="collections-overview">{collectionsList}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
