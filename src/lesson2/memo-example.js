let results = {
  "1;;;2": 3,
  "2;;;2": 4,
}

function sum(a, b) {
  const key = `${a};;;${b}`;

  if (results[key] === undefined) {
    results[key] = a + b
  }

  return results[key];
}

sum(1, 2); // results = {"1-2": 3} -> 3
sum(2, 2); // results = {"1-2": 3, "2-2": 4} -> 4
sum(1, 2); // results = {"1-2": 3} -> 3
sum(2, 2); // results = {"1-2": 3, "2-2": 4} -> 4

