/**
 * @description The FunctionalComponentWithRefExample component.
 */
import React from 'react';

export function FunctionalComponentWithRefExample() {
  return (
    <div className="">
      <Input ref={(reference) => console.log(reference)} />
    </div>
  );
}

function Input() {
  return (
    <input type="text"/>
  )
}
