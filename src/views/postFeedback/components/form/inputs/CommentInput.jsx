import React from "react";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage";
import { locales } from "../../../../lib/locales";

const CommentInput = ({ register, formErrors }) => {
  const language = locales["POST_FEEDBACK"];

  return (
    <div className="customer-feedback__field-container">
      <label className="customer-feedback__label" htmlFor="form-comment">
        {language.COMMENT.FORM_LABEL}
      </label>
      <textarea
        className="customer-feedback__textarea"
        type="text"
        placeholder={language.COMMENT.PLACEHOLDER}
        id="form-comment"
        ref={register({
          required: language.COMMENT.REQUIRED_TEXT,
          message: language.COMMENT.INVALID,
        })}
        name="comment"
      />
      {formErrors.comment && (
        <InfoMessage dataTestId="comment-form-error" isYellow>
          {formErrors.comment.message}
        </InfoMessage>
      )}
    </div>
  );
};

CommentInput.propTypes = {
  /* this function from the react-form-hooks registers the ref of this component to validate its value on submission.*/
  register: PropTypes.func.isRequired,
  /* this object returns the formErrors related to this component */
  formErrors: PropTypes.object.isRequired,
};

export default CommentInput;
