import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const NavigationList = ({ children }) => {
  return (
    <nav data-testid="navigation-list" className="navbar">
      <ul className="navbar__ul">{children}</ul>
    </nav>
  );
};

NavigationList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationList;
