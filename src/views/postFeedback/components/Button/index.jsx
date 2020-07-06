import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import "./styles.css";

const Button = ({ children, isLoading, isDisabled, isSuccess, dataTestId }) => {
  const getButtonClassNames = () =>
    cx(
      "center",
      { btn: !isLoading && !isDisabled },
      {
        "btn btn--green": isSuccess,
      },
      { "btn btn--disabled": isLoading }
    );

  return (
    <button
      data-testid={dataTestId}
      className={getButtonClassNames()}
      disabled={isDisabled}
      type="submit"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSuccess: PropTypes.bool,
  dataTestId: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  isSuccess: false,
};

export default Button;
