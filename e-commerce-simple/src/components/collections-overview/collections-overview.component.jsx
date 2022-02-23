import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.style.scss"
import  {selectCollections} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);
