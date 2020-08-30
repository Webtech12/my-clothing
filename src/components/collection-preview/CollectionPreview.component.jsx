import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ title, items }) => {
  const itemsList = items
    .filter((item, idx) => idx < 4)
    .map((item) => <CollectionItem key={item.id} item={item} />);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemsList}</div>
    </div>
  );
};

export default CollectionPreview;
