import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const collections = this.state.collections.map(
      ({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      )
    );

    return <div>{collections}</div>;
  }
}

export default ShopPage;
