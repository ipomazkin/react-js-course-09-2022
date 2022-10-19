import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { selectStatus, selectData, selectError, load } from './products-duck'
import { queryStatus } from "../../../utils/query-status";

export function useProducts() {
  const products = useSelector(selectData)
  const error = useSelector(selectError)
  const status = useSelector(selectStatus)

  const dispatch = useDispatch()

  useEffect(() => {
    if (status === queryStatus.initial) {
      dispatch(load())
    }
  }, [status])

  return useMemo(() => ({
    isLoading: status === queryStatus.initial || status === queryStatus.loading,
    isSuccess: status === queryStatus.success,
    isError: status === queryStatus.error,
    products,
    error
  }), [status, products, error])
}