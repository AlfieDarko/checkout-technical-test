import React from "react";
import { CommentInput, EmailInput, NameInput, RatingsInput } from "../inputs";
import { locales } from "../../../lib/locales";
import LoadingSpinner from "../../../loadingSpinner";
import InfoMessage from "../InfoMessage";
import PropTypes from "prop-types";
import Button from "../Button";
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

  const renderButtonContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (isAsyncSuccessful) {
      return language.SUBMIT_CTA.SUBMITTED;
    } else {
      return language.SUBMIT_CTA.SUBMIT_COMMENT;
    }
  };

  return (
    <section tabIndex="0" className="feedback-form__container margin-0-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="feedback-form--max-width"
        data-testid="feedback-form"
      >
        <legend
          className="feedback-form__legend"
          data-testid="feedback-form-legend"
        >
          <h2>{language.FORM_LEGEND}</h2>
        </legend>
        <NameInput register={register} formErrors={formErrors} />
        <EmailInput register={register} formErrors={formErrors} />
        <RatingsInput register={register} formErrors={formErrors} />
        <CommentInput register={register} formErrors={formErrors} />
        <Button
          dataTestId="feedback-form-submit-btn"
          isDisabled={isLoadingOrIsSuccess}
          isSuccess={isAsyncSuccessful}
          isLoading={isLoading}
        >
          {renderButtonContent()}
        </Button>
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
