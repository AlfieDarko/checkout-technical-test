/* eslint-disable react/prop-types */
import React from "react";

const MockSvg = ({ title, ...props }) => (
  <svg {...props}>{title && <title>{title}</title>}</svg>
);

const MockSvgWithRef = React.forwardRef(({ title, ...props }, ref) => (
  <svg ref={ref} {...props}>
    {title && <title>{title}</title>}
  </svg>
));

export default MockSvg;
export const ReactComponent = MockSvgWithRef;
