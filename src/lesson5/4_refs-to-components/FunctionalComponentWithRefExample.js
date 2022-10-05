/**
 * @description The FunctionalComponentWithRefExample component.
 */
import React, { forwardRef } from 'react';

export function FunctionalComponentWithRefExample() {
  return (
    <div className="">
      <Input ref={(reference) => console.log(reference)} />
    </div>
  );
}

const Input = forwardRef((props, ref) => {
  return (
    <input ref={ref} type="text"/>
  )
})
