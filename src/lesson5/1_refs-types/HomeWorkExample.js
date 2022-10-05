/**
 * @description The HomeWorkExample component.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function HomeWorkExample(props) {
  const [isSale, setIsSale] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [isHot, setIsHot] = useState(false)

  const handleSelectCategory = (name) => {

  }

  return (
    <div className="">
      <Checkbox name="isSale" checked={isSale} onChange={() => handleSelectCategory('isSale')} />
      <Checkbox name="isNew" checked={isNew} onChange={() => handleSelectCategory('isNew')} />
      <Checkbox name="isHot" checked={isHot} onChange={() => handleSelectCategory('isHot')} />
    </div>
  );
}

function Checkbox(props) {
  const { checked, onChange, name } = props

  return (
    <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
  )
}