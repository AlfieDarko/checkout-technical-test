import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const NavigationList = ({ children }) => {
  return (
    <nav data-testid="navigation-list" className="navigation-list">
      <ul className="navigation-list__ul">{children}</ul>
    </nav>
  );
};

NavigationList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationList;
