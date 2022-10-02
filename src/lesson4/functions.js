function sum(a, b) {
  return a + b
}

function product(a, b) {
  return a * b
}

function sumAndProduct(a, b) {
  return product(sum(a, b), sum(a, b))
}