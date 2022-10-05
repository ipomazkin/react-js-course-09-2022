/**
 * @description The FormExample component.
 */
import React, { useState } from 'react';

export function FormExample() {
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')

  const handleChangeFirstName = (e) => {
    setFirstNameValue(e.target.value)
  }
  const handleChangeLastName = (e) => {
    setLastNameValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formFields = {
      firstName: firstNameValue,
      lastName: lastNameValue,
    }

    console.log('formFields:', formFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>First name: </span>
          <input value={firstNameValue} onChange={handleChangeFirstName} type="text" name="firstName" />
        </label>
      </div>

      <div>
        <label>
          <span>Last name: </span>
          <input value={lastNameValue} onChange={handleChangeLastName} type="text" name="lastName" />
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}


