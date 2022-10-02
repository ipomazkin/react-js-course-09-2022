/**
 * @description The Button component.
 */
import React from 'react';
import PropTypes from 'prop-types';

export function Button({  count = 0 }) {
  return (
    <button />
  );
}

Button.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.string,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  // children: PropTypes.node.isRequired,
  children: PropTypes.element,
  variant: PropTypes.oneOf(['contained', 'outline', 'link']),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  date: PropTypes.instanceOf(Date)
};

Button.defaultProps = {
  title: 123
};
