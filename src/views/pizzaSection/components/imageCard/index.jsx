import React from "react";
import PropTypes from "prop-types";

import PizzaSrc from "../../../assets/Optimized-pizza.jpeg";

import { locales } from "#views/lib/locales";
import "./styles.css";

const language = locales["PIZZA_VIEW"];

const ImageCard = ({ title, imageSrc, description }) => {
  return (
    <section
      data-testid="image-card-component"
      tabIndex="0"
      className="image-card__container"
    >
      <h2 data-testid="image-card-title" className="image-card__title">
        {title}
      </h2>
      <img
        data-testid="image-card-picture"
        className="image-card__img"
        src={imageSrc}
        alt={`image of ${title}`}
      />
      <p
        data-testid="image-card-description"
        className="image-card__description"
      >
        <i>{`"${description}"`}</i>
      </p>
    </section>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

ImageCard.defaultProps = {
  title: language.IMAGE_TITLE,
  imageSrc: PizzaSrc,
  description: language.DESCRIPTION,
};

export default ImageCard;
