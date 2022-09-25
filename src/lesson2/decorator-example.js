export const sum = (a, b) => a + b;

export const divide = (a, b) => a / b;

export const product = (a, b) => a * b;

export const addLogging = (sum) => {
  return (...args) => {
    console.log(...args);
    return sum(...args);
  }
}

const sumWithLogging = addLogging(sum)
const divideWithLogging = addLogging(divide)

const A = () => {}

const Decorate = (originalFun) => {
  const newFun = () => {
    return originalFun();
  }

  return newFun
}

const B = Decorate(A) // A -> () => A()
