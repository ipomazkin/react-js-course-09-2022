/**
 * @description The IntervalExample component.
 */
import React, { useEffect, useState } from 'react';

export function IntervalExample(props) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const tid = setInterval(() => {
      console.log('counter:', counter)
    }, 500)

    return () => {
      clearInterval(tid);
    }
  }, [])

  return (
    <div className="">
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((currentValue) => currentValue + 1)}>increase</button>
      <button onClick={() => setCounter((currentValue) => currentValue - 1)}>decrease</button>
    </div>
  );
}

