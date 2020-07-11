import React from "react";
import PropTypes from "prop-types";

const AverageRatingAndFeedbackWrapper = ({ children }) => {
  return (
    <section
      id="comments"
      tabIndex="0"
      className="list-feedback max-width-1000 margin-0-auto margin-top-300px"
    >
      {children}
    </section>
  );
};

AverageRatingAndFeedbackWrapper.propTypes = {
  children: PropTypes.node,
};

export default AverageRatingAndFeedbackWrapper;
