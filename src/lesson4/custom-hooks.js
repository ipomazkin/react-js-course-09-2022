import { useEffect, useMemo, useState } from "react";

function useIsOpenStateSimplified() {
  return useState(false)
}

function useTimer(interval = 1000, callback = () => {}) {
  useEffect(() => {
    const tid = setInterval(() => {
      callback();
    }, interval)

    return () => {
      clearInterval(tid)
    }
  }, [interval, callback])
}

export function useBooleanFlipFlop() {
  const [isTrue, setIsTrue] = useIsOpenStateSimplified()

  useTimer(1000, () => {
    setIsTrue((currentValue) => !currentValue)
  }, [setIsTrue])

  return isTrue
}