import React from "react";
import PropTypes from "prop-types";

const ProductAndFormWrapper = ({ children }) => {
  return (
    <div className="layout-container yellow-bg">
      <div className="row-container max-width-1000 margin-0-auto">
        {children}
      </div>
    </div>
  );
};

ProductAndFormWrapper.propTypes = {
  children: PropTypes.node,
};

export default ProductAndFormWrapper;
