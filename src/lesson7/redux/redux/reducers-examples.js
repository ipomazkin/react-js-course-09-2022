const incrementAction = {
  type: 'increment',
  payload: 4
}

const decrementAction = {
  type: 'decrement',
  payload: 4
}

const setAction = {
  type: 'set',
  payload: 4
}

const counterReducer = (counter, action) => {
  const { type, payload } = action

  if (type === 'increment') {
    return counter + payload;
  }

  if (type === 'decrement') {
    return counter - payload;
  }

  if (type === 'set') {
    return payload;
  }

  return counter;
}

let counter = 1;
counter = counterReducer(counter, { type: 'increment', payload: 1 }) // counter = 2
counter = counterReducer(counter, { type: 'increment', payload: 3 }) // counter = 5
counter = counterReducer(counter, { type: 'decrement', payload: 5 }) // counter = 0
counter = counterReducer(counter, { type: 'set', payload: 255 }) // counter = 255
