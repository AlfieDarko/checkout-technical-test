import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const NavigationItem = ({ href, children, dataTestId, target }) => {
  return (
    <li className="navbar__item">
      <a
        className="navbar__anchor-tag"
        href={href}
        target={target}
        data-testid={dataTestId}
      >
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default NavigationItem;
