import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySectionsSelector } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/MenuItem.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  const sectionsList = sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));
  return <div className="directory-menu">{sectionsList}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
});
export default connect(mapStateToProps)(Directory);
