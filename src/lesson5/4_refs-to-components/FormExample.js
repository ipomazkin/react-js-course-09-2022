/**
 * @description The FormExample component.
 */
import React, { useCallback, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

export function FormExample(props) {
  const formApiRef = useRef(null);

  useEffect(() => {
    formApiRef.current.setDefaultValue('John', 'Smith')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div>
        <button onClick={() => formApiRef.current.reset()}>reset</button>
      </div>
      <Form ref={formApiRef} onSubmit={handleSubmit} />
    </div>
  );
}

const Form = React.forwardRef((props, ref) => {
  const { onSubmit } = props

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const reset = useCallback(() => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
  }, [])

  const setDefaultValue = useCallback((defaultFirstName, defaultLastName) => {
    firstNameRef.current.value = defaultFirstName;
    lastNameRef.current.value = defaultLastName;
  }, [])

  useImperativeHandle(ref, () => {
    return {
      firstName: firstNameRef,
      lastName: lastNameRef,
      reset,
      setDefaultValue,
    }
  })

  // if (typeof ref === 'object') {
  //   ref.current = {
  //     firstName: firstNameRef,
  //     lastName: lastNameRef,
  //     reset,
  //     setDefaultValue,
  //   }
  // }

  return (
    <form onSubmit={onSubmit}>
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
})

Form.propTypes = {
  onSubmit: PropTypes.func
}
