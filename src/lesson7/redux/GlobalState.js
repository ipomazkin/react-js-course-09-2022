/**
 * @description The GlobalState component.
 */
import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";

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

export function GlobalState(props) {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const selectedCategories = useSelector((globalState) => {
    return globalState.categories.selectedCategories;
  })
  const selectedCategoriesData = useMemo(() => categories.filter((category) => selectedCategories.includes(category.id)), [selectedCategories])

  return (
    <div>
      <ChildA />
      <div>
        <b>Selected categories:</b> <span>{selectedCategoriesData.map((category) => category.title).join(', ')}</span>
      </div>
    </div>
  );
}

function ChildA() {
  return <ChildB />
}

function ChildB() {
  return <ChildC />
}

function ChildC() {
  return <CategoriesList />
}

function CategoriesList() {
  return (
    <div>
      {categories.map((category) => (
        <CategoryButton
          id={category.id}
          title={category.title}
          key={category.id}
        />
      ))}
    </div>
  )
}

function CategoryButton({id, title}) {
  const dispatch = useDispatch() // store.dispatch
  const isActive = useSelector((globalState) => {
    const selectedCatId = globalState.categories.selectedCategories.find((catId) => catId === id)
    return !!selectedCatId
  })

  const add = (id) => {
    dispatch({
      type: 'select',
      payload: {
        id
      }
    })
  }

  const remove = () => {
    dispatch({
      type: 'unselect',
      payload: {
        id
      }
    })
  }

  const handleClick = useCallback(() => {
    if (isActive) {
      remove(id);
      return;
    }

    add(id)
  }, [isActive, add, remove, id])

  return <button onClick={handleClick}>{title} {isActive ? 'selected' : ''}</button>
}

