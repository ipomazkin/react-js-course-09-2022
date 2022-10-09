/**
 * @description The ScrollWatcher component.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function ScrollWatcher(props) {
  const { children } = props

  const [scrollPosition, setScrollPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  })

  useEffect(() => {
    const handler = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return children(scrollPosition);
}

ScrollWatcher.propTypes = {
  children: PropTypes.func
};

ScrollWatcher.defaultProps = {
  children: () => null
};
