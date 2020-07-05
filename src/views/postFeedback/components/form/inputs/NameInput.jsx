import React from "react";
import { locales } from "../../../../lib/locales";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage";

const NameInput = ({ register, formErrors }) => {
  const language = locales["POST_FEEDBACK"];
  return (
    <div className="customer-feedback__field-container">
      <label className="customer-feedback__label" htmlFor="form-name">
        {language.NAME.FORM_LABEL}
      </label>
      <input
        className="customer-feedback__input"
        placeholder={language.NAME.PLACEHOLDER}
        type="text"
        name="name"
        id="form-name"
        ref={register({
          required: language.NAME.REQUIRED_TEXT,
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      {formErrors.name && (
        <InfoMessage dataTestId="name-form-error" isYellow>
          {formErrors.name.message}
        </InfoMessage>
      )}
    </div>
  );
};

NameInput.propTypes = {
  /* this function from the react-form-hooks registers the ref of this component to validate its value on submission.*/
  register: PropTypes.func.isRequired,
  /* this object returns the formErrors related to this component */
  formErrors: PropTypes.object.isRequired,
};

export default NameInput;
