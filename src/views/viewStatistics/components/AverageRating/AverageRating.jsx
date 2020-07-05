import React from "react";
import PropTypes from "prop-types";

const renderReviewContent = (numberOfReviews, averageRating) => {
  return (
    <div data-testid="average-rating-review-content">
      <p className="list-feedback__subtitle">Average Rating of</p>
      <h2
        className="list-feedback__avg-rating"
        data-testid="average-rating-count"
      >
        {numberOfReviews && `${averageRating}`}
      </h2>

      <p className="list-feedback__subtitle" data-testid="reviews-count">
        {`from ${numberOfReviews} reviews`}
      </p>
    </div>
  );
};

const renderZeroReviewContent = () => {
  return (
    <>
      <h2 data-testid="average-rating-no-reviews-text">
        There are no reviews at the moment
      </h2>
    </>
  );
};

const AverageRating = ({ numberOfReviews, averageRating }) => {
  const ariaLabelWithReviews = `This Pizza has an average rating of ${averageRating} from ${numberOfReviews} reviews`;
  const ariaLabelNoReviews = `There are no reviews at the moment`;
  const isReviewsPresent = numberOfReviews > 0;

  return (
    <div
      data-testid="average-rating-component"
      tabIndex="0"
      aria-label={isReviewsPresent ? ariaLabelWithReviews : ariaLabelNoReviews}
    >
      {isReviewsPresent && renderReviewContent(numberOfReviews, averageRating)}
      {!isReviewsPresent && renderZeroReviewContent()}
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
