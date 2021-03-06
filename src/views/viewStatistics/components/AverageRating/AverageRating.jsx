import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "#views/loadingSpinner";
import "./styles.css";

const renderReviewContent = (numberOfReviews, averageRating) => {
  return (
    <div data-testid="average-rating-review-content">
      <p className="average-rating__text">Average Rating of</p>

      <p className="average-rating__value" data-testid="average-rating-count">
        {numberOfReviews && `${averageRating}`}
      </p>

      <p className="average-rating__text" data-testid="reviews-count">
        {`from ${numberOfReviews} reviews`}
      </p>
    </div>
  );
};

const renderZeroReviewContent = () => {
  return (
    <>
      <p data-testid="average-rating-no-reviews-text">
        There are no reviews at the moment
      </p>
    </>
  );
};

const AverageRating = ({ numberOfReviews, averageRating, isLoading }) => {
  const ariaLabelWithReviews = `This Pizza has an average rating of ${averageRating} from ${numberOfReviews} reviews`;
  const ariaLabelNoReviews = `There are no reviews at the moment`;
  const isReviewsPresent = numberOfReviews > 0;

  return (
    <div
      data-testid="average-rating-component"
      tabIndex="0"
      aria-label={isReviewsPresent ? ariaLabelWithReviews : ariaLabelNoReviews}
    >
      {isLoading && <LoadingSpinner />}
      {isReviewsPresent &&
        !isLoading &&
        renderReviewContent(numberOfReviews, averageRating)}
      {!isReviewsPresent && !isLoading && renderZeroReviewContent()}
    </div>
  );
};

AverageRating.propTypes = {
  /* numberOfReviews: the number of reviews for this pizza */
  numberOfReviews: PropTypes.number,
  /* averageRating: the average rating for this pizza. */
  averageRating: PropTypes.number,
};

AverageRating.defaultProps = {
  numberOfReviews: 0,
  averageRating: 0,
};

export default AverageRating;
