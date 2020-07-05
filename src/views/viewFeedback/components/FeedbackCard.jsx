import React from "react";
import PropTypes from "prop-types";
import DefaultProfilePic from "#views/assets/no-avatar.gif";
const FeedbackCard = ({ item }) => {
  const { name, rating, comment, imageSrc } = item;

  return (
    <div tabIndex="0" className="feedback-card">
      <div>
        <img
          className="feedback-card__image"
          src={imageSrc}
          alt={`Picture of ${name}`}
        />
      </div>

      <div className="feedback-card-container">
        <div className="display-flex justify-content-space-between">
          <span className="feedback-card__name">{name}</span>
          <span
            className="feedback-card__rating"
            aria-label={`Rating: ${rating} stars`}
          >
            {"⭐️".repeat(rating)}
          </span>
        </div>
        <span className="feedback-card__comment">
          <i>{`"${comment}"`}</i>
        </span>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  item: PropTypes.shape({
    /* Name of the user giving a pizza review */
    name: PropTypes.string.isRequired,
    /* The rating that the user gave the pizza */
    rating: PropTypes.number.isRequired,
    /* Review comments left by the user */
    comment: PropTypes.string.isRequired,
    /* Profile picture used by the user */
    imageSrc: PropTypes.string,
  }),
};

FeedbackCard.defaultProps = {
  imageSrc: DefaultProfilePic,
};

export default FeedbackCard;
