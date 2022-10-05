/**
 * @description The IntervalExample component.
 */
import React, { useEffect, useRef, useState } from 'react';

export function IntervalExample(props) {
  const [counter, setCounter] = useState(0)

  const counterRef = useRef(counter) // { current: null }
  useEffect(() => {
    counterRef.current = counter;
  }, [counter])

  useEffect(() => {
    const tid = setInterval(() => {
      console.log('counter:', counterRef.current)
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

