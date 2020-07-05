import React from "react";
import cx from "classnames";

const InfoMessage = (props) => {
  const { children, isYellow, isGreen, isRed, dataTestId } = props;

  const componentClassNames = cx(
    "customer-feedback__span",
    { "customer-feedback__span--yellow": isYellow },
    { "customer-feedback__span--green": isGreen },
    { "customer-feedback__span--red": isRed }
  );

  return (
    <span className={componentClassNames} data-testid={dataTestId}>
      {children}
    </span>
  );
};

export default InfoMessage;
