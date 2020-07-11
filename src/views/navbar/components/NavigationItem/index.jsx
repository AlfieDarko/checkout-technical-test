import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const NavigationItem = ({
  href,
  children,
  dataTestId,
  target,
  isNoReferrer,
}) => {
  return (
    <li className="navigation-item__li" tabIndex="0">
      <a
        className="navigation-item__anchor-tag"
        href={href}
        target={target}
        data-testid={dataTestId}
        rel={isNoReferrer && "noreferrer"}
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
  isNoReferrer: PropTypes.bool,
};

export default NavigationItem;
