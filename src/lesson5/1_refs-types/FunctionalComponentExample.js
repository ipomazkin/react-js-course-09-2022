/**
 * @description The FunctionalComponentExample component.
 */
import React from 'react';
import PropTypes from 'prop-types';

export function FunctionalComponentExample(props) {
  return (
    <form action="">
      <div>
        <label>
          <span>First name: </span>
          <input type="text" name="firstName" />
        </label>
      </div>

      <div>
        <label>
          <span>Last name: </span>
          <input type="text" name="lastName" />
        </label>
      </div>
    </form>
  );
}

FunctionalComponentExample.propTypes = {};

FunctionalComponentExample.defaultProps = {};
