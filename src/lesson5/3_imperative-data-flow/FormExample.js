/**
 * @description The FormExample component.
 */
import React, { useRef, useState } from 'react';

export function FormExample() {
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
      <div>
        <label>
          <span>First name: </span>
          <input ref={firstNameRef} type="text" name="firstName" />
        </label>
      </div>

      <div>
        <label>
          <span>Last name: </span>
          <input ref={lastNameRef} type="text" name="lastName" />
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}


