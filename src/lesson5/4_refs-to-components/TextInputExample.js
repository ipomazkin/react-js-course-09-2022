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
      <TextInput2 inputRef={lastNameRef} label="Last name" name="lastName" />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

const TextInput = React.forwardRef((props, ref) => {
  const { label, name } = props

  return (
    <div className="input">
      <label>
        <span>{label}: </span>
        <input ref={ref} type="text" name={name}/>
      </label>
    </div>
  );
})

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


const TextInput2 = (props) => {
  const { label, name, inputRef } = props

  return (
    <div className="input">
      <label>
        <span>{label}: </span>
        <input ref={inputRef} type="text" name={name}/>
      </label>
    </div>
  );
}

TextInput2.propTypes = {
  inputRef: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}