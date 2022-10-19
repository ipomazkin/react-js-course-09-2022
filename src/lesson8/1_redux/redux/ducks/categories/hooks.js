import { useSelector, useDispatch } from "react-redux";
import { selectSelectedCategories, addCategory, removeCategory, selectIsCategorySelected } from './categories-duck'
import { useCallback, useEffect, useMemo } from "react";

export function useSelectedCategories() {
  const selectedCategories = useSelector(selectSelectedCategories)
  const dispatch = useDispatch()

  const checkIsCategorySelected = useCallback(
    (categoryId) => {
      return selectedCategories.includes(categoryId)
    },
    [selectedCategories]
  )
  
  useEffect(() => {
  }, [checkIsCategorySelected])

  const selectCategory = useCallback((categoryId) => {
    dispatch(addCategory(categoryId))
  }, [dispatch])

  const unselectCategory = useCallback((categoryId) => {
    dispatch(removeCategory(categoryId))
  }, [dispatch])

  const toggleCategory = useCallback((categoryId) => {
    if (checkIsCategorySelected(categoryId)) {
      unselectCategory(categoryId);
      return;
    }
    selectCategory(categoryId);
  }, [dispatch, checkIsCategorySelected, selectCategory, unselectCategory])


  return useMemo(() => ({
    selectedCategories,
    selectCategory,
    unselectCategory,
    toggleCategory,
    checkIsCategorySelected,
  }), [
    selectedCategories,
    selectCategory,
    unselectCategory,
    toggleCategory,
    checkIsCategorySelected,
  ])
}

export function useIsCategorySelected(categoryId) {
  return useSelector((rootState) => selectIsCategorySelected(rootState, categoryId))
}