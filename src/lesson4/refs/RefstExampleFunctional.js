/**
 * @description The RefstExampleFunctional component.
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export function RefstExampleFunctional(props) {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  return (
    <div className="">
      <input ref={(node) => {
        firstNameRef.current = node
      }} type="text" name="firstName"/>

      <input ref={lastNameRef} type="text" name="lastName"/>
    </div>
  );
}

RefstExampleFunctional.propTypes = {};

RefstExampleFunctional.defaultProps = {};
