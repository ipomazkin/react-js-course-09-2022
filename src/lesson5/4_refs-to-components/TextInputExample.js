/**
 * @description The TextInputExample component.
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const TextInputExample = (props) => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formFields = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
    }

    console.log('formFields:', formFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput ref={firstNameRef} label="First name" name="firstName" />
      <TextInput ref={lastNameRef} label="Last name" name="lastName" />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

TextInputExample.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const TextInput = (props) => {
  const { label, name } = props

  return (
    <div className="input">
      <label>
        <span>{label}: </span>
        <input type="text" name={name}/>
      </label>
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}