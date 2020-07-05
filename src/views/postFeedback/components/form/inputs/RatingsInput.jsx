import React from "react";
import { locales } from "../../../../lib/locales";
import InfoMessage from "../InfoMessage";

import PropTypes from "prop-types";

const RatingsInput = ({ register, formErrors }) => {
  const language = locales["POST_FEEDBACK"];

  return (
    <div className="customer-feedback__field-container">
      <label className="customer-feedback__label" htmlFor="form-rating">
        {language.RATING.FORM_LABEL}
      </label>
      <input
        min={1}
        max={5}
        className="customer-feedback__input"
        type="number"
        id="form-rating"
        ref={register({
          required: language.RATING.REQUIRED_TEXT,
          message: language.RATING.MESSAGE,
        })}
        name="rating"
      />
      {formErrors.rating && (
        <InfoMessage dataTestId="rating-form-error" isYellow>
          {formErrors.rating.message}
        </InfoMessage>
      )}
    </div>
  );
};

RatingsInput.propTypes = {
  /* this function from the react-form-hooks registers the ref of this component to validate its value on submission.*/
  register: PropTypes.func.isRequired,
  /* this object returns the formErrors related to this component */
  formErrors: PropTypes.object.isRequired,
};

export default RatingsInput;
