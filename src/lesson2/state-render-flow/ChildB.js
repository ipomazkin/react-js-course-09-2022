/**
 * @description The ChildB component.
 */
import React, { useState, memo, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

export const ChildB = memo((props) => {
  console.log('ChildB is rendering now')

  const [isOpen, setIsOpen] = useState(false)
  const [counter, setCounter] = useState(0)

  const counterPower = useMemo(() => {
    return counter * counter
  }, [counter])

  const handleClick = useCallback(() => {
    console.log('counter:', counter)
  }, [counter])

  useEffect(() => {
    console.log('ChildB useEffect')

    const tid = setInterval(() => {
      console.log('tick')
      setCounter((currentCounter) => currentCounter + 1)
    }, 1000);

    return () => {
      clearInterval(tid);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h5>ChildB  {isOpen && 'is opened'}:</h5>
      <p>counter is: {counter}</p>
      <p>counterPower is: {counterPower}</p>
      <div>
        <button onClick={handleToggle}>Toggle ChildB</button>
      </div>
    </div>
  );
});

ChildB.propTypes = {};

ChildB.defaultProps = {};
