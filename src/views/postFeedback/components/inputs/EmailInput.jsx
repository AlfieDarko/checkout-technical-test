import React from "react";
import { locales } from "#views/lib/locales";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage";
import "./styles.css";

const EmailInput = ({ register, formErrors }) => {
  const language = locales["POST_FEEDBACK"];

  return (
    <div className="form-field__container">
      <label className="form-field__label" htmlFor="form-email">
        {language.EMAIL.FORM_LABEL}
      </label>
      <input
        className="form-field__input"
        placeholder={language.EMAIL.PLACEHOLDER}
        type="email"
        name="email"
        id="form-email"
        ref={register({
          required: language.EMAIL.REQUIRED_TEXT,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: language.EMAIL.INVALID,
          },
        })}
      />
      {formErrors.email && (
        <InfoMessage dataTestId="email-form-error" isYellow>
          {formErrors.email.message}
        </InfoMessage>
      )}
    </div>
  );
};

EmailInput.propTypes = {
  /* this function from the react-form-hooks registers the ref of this component to validate its value on submission.*/
  register: PropTypes.func.isRequired,
  /* this object returns the formErrors related to this component */
  formErrors: PropTypes.object.isRequired,
};

export default EmailInput;
