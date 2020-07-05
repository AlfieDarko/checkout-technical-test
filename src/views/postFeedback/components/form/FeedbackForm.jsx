import React from "react";
import { CommentInput, EmailInput, NameInput, RatingsInput } from "./inputs";
import { locales } from "../../../lib/locales";
import LoadingSpinner from "../../../loadingSpinner/LoadingSpinner";
import InfoMessage from "./InfoMessage";
import PropTypes from "prop-types";

import cx from "classnames";
import "./styles.css";

const FeedbackForm = ({
  onSubmit,
  handleSubmit,
  register,
  formErrors,
  asyncStatus,
  formAsyncError,
  isLoading,
}) => {
  const language = locales["POST_FEEDBACK"];
  const isAsyncSuccessful = asyncStatus === 200;
  const isLoadingOrIsSuccess = isLoading || isAsyncSuccessful;

  const getButtonClassNames = () =>
    cx(
      "center",
      { "customer-feedback__btn": !isLoading && asyncStatus != 200 },
      {
        "customer-feedback__btn customer-feedback__btn--green":
          asyncStatus == 200 && !isLoading,
      },
      { "customer-feedback__btn customer-feedback__btn--disabled": isLoading }
    );

  const renderButtonContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (asyncStatus === 200) {
      return language.SUBMIT_CTA.SUBMITTED;
    } else {
      return language.SUBMIT_CTA.SUBMIT_COMMENT;
    }
  };

  return (
    <section tabIndex="0" className="customer-feedback-container margin-0-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="customer-feedback__form"
        data-testid="feedback-form"
      >
        <legend
          className="customer-feedback__legend"
          data-testid="feedback-form-legend"
        >
          <h2>{language.FORM_LEGEND}</h2>
        </legend>
        <NameInput register={register} formErrors={formErrors} />
        <EmailInput register={register} formErrors={formErrors} />
        <RatingsInput register={register} formErrors={formErrors} />
        <CommentInput register={register} formErrors={formErrors} />
        <button
          data-testid="feedback-form-submit-btn"
          className={getButtonClassNames()}
          disabled={isLoadingOrIsSuccess}
          type="submit"
        >
          {renderButtonContent()}
        </button>
      </form>
      {isAsyncSuccessful && !formAsyncError && (
        <InfoMessage dataTestId="feedback-form-success-text" isGreen>
          {language.FORM_ASYNC_STATUS.SUCCESS}
        </InfoMessage>
      )}
      {formAsyncError && (
        <InfoMessage dataTestId={"feedback-form-failure-text"} isRed>
          {language.FORM_ASYNC_STATUS.FAILURE}
        </InfoMessage>
      )}
    </section>
  );
};

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  /* onSubmit: function that is passed into handleSubmit that allows us to run code onSubmit */
  handleSubmit: PropTypes.func.isRequired,
  /* handleSubmit: function passed in from react-form-hooks that handles the form submit*/
  register: PropTypes.func.isRequired,
  /* register: function passed in from react-form hooks that registers component value for validation and submission  */
  formErrors: PropTypes.object,
  /* formErrors: form validation errors returned by react-forms-hooks */
  asyncStatus: PropTypes.number,
  /* asyncStatus: the form request statuscode */
  formAsyncError: PropTypes.object,
  /* formAsyncError: the form request error object*/
  isLoading: PropTypes.bool,
  /* isLoading: checks whether is an ongoign Async action for the Comment Form State */
};

export default FeedbackForm;
