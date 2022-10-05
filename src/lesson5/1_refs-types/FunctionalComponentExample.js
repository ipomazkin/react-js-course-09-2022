/**
 * @description The FunctionalComponentExample component.
 */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function FunctionalComponentExample(props) {
  const firstNameRef = useRef(null)

  useEffect(() => {
    console.log('firstNameRef:', firstNameRef)
  }, [])

  return (
    <form action="">
      <div>
        <label>
          <span>First name: </span>
          <input ref={firstNameRef} type="text" name="firstName" />
        </label>
      </div>

      <div>
        <label>
          <span>Last name: </span>
          <input ref={(node) => {
            console.log('lastName:', node)
          }} type="text" name="lastName" />
        </label>
      </div>
    </form>
  );
}

FunctionalComponentExample.propTypes = {};

FunctionalComponentExample.defaultProps = {};
