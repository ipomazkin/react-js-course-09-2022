/**
 * @description The Categories component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { categories } from "../mocks/categories";
import { useSelectedCategories } from "../redux/ducks/categories";

export function Categories(props) {
  const { checkIsCategorySelected, toggleCategory } = useSelectedCategories()

  return (
    <div className="">
      {categories.map((category) => (
        <button key={category.id} onClick={() => toggleCategory(category.id)}>
          {checkIsCategorySelected(category.id) ? 'Selected ' : ''}{category.title}
        </button>
      ))}
    </div>
  );
}

Categories.propTypes = {};

Categories.defaultProps = {};
