/**
 * @description The LocalState component.
 */
import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const categories = [
  {
    id: 1,
    title: 'Cats'
  },
  {
    id: 2,
    title: 'Dogs'
  },
  {
    id: 3,
    title: 'Birds'
  }
]

export function LocalState(props) {
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleAddCategory = useCallback((categoryId) => {
    setSelectedCategories((ids) =>
      [...ids, categoryId].filter((item, index, items) => items.indexOf(item) === index))
  }, [])

  const handleRemoveCategory = useCallback((categoryId) => {
    setSelectedCategories((ids) =>
      ids.filter((item) => item !== categoryId))
  }, [])

  const selectedCategoriesData = useMemo(() => categories.filter((category) => selectedCategories.includes(category.id)), [selectedCategories])

  return (
    <div>
      <ChildA addCategory={handleAddCategory} removeCategory={handleRemoveCategory} selectedCategories={selectedCategories} />
      <div>
        <b>Selected categories:</b> <span>{selectedCategoriesData.map((category) => category.title).join(', ')}</span>
      </div>
    </div>
  );
}

function ChildA({selectedCategories, addCategory, removeCategory}) {
  return <ChildB addCategory={addCategory} removeCategory={removeCategory} selectedCategories={selectedCategories}/>
}

function ChildB({selectedCategories, addCategory, removeCategory}) {
  return <ChildC addCategory={addCategory} removeCategory={removeCategory} selectedCategories={selectedCategories}/>
}

function ChildC({selectedCategories, addCategory, removeCategory}) {
  return <CategoriesList addCategory={addCategory} removeCategory={removeCategory} selectedCategories={selectedCategories}/>
}

function CategoriesList({selectedCategories, addCategory, removeCategory}) {
  return (
    <div>
      {categories.map((category) => (
        <CategoryButton
          id={category.id}
          title={category.title}
          key={category.id}
          selectedCategories={selectedCategories}
          add={addCategory}
          remove={removeCategory}
        />
      ))}
    </div>
  )
}

function CategoryButton({selectedCategories, add, remove, id, title}) {
  const isActive = useMemo(() => selectedCategories.includes(id), [selectedCategories, id])

  const handleClick = useCallback(() => {
    if (isActive) {
      remove(id);
      return;
    }

    add(id)
  }, [isActive, add, remove, id])

  return <button onClick={handleClick}>{title} {isActive ? 'selected' : ''}</button>
}

