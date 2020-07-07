import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.css";

const Button = ({ children, isDisabled, isSuccess, dataTestId }) => {
  const getButtonClassNames = () =>
    cx(
      "center",
      { btn: !isSuccess && !isDisabled },
      {
        "btn btn--green": isSuccess,
      },
      { "btn btn--disabled": isDisabled }
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
