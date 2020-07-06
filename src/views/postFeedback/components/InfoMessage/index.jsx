import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

const InfoMessage = (props) => {
  const { children, isYellow, isGreen, isRed, dataTestId } = props;

  const componentClassNames = cx(
    "info-message__span",
    { "info-message__span--yellow": isYellow },
    { "info-message__span--green": isGreen },
    { "info-message__span--red": isRed }
  );

  return (
    <span className={componentClassNames} data-testid={dataTestId}>
      {children}
    </span>
  );
};

InfoMessage.propTypes = {
  children: PropTypes.node,
  isYellow: PropTypes.bool,
  isGreen: PropTypes.bool,
  isRed: PropTypes.bool,
  dataTestId: PropTypes.string.isRequired,
};

export default InfoMessage;
