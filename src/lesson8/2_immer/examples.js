import produce from "immer";

const someBigObject = {
  number: 1,
  string: '',
  arrayOfObjects: [
    {
      id: 1,
      title: 'Test',
      categories: [1, 2, 3],
    },
    {
      id: 2,
      title: 'Test',
      categories: [1, 2, 3],
    },
    {
      id: 3,
      title: 'Test',
      categories: [1, 2, 3],
    }
  ]
}

// native js
const clonedObjectWithChanges = {
  ...someBigObject,
  arrayOfObjects: [
    ...someBigObject.arrayOfObjects.map((obj) => ({
      ...obj,
      categories: [...obj.categories]
    })),
  ]
}
clonedObjectWithChanges.arrayOfObjects[0].categories.push(4)

// immer
const clonedObjectWithChanges2 = produce(someBigObject, (mutableObject) => {
  mutableObject.arrayOfObjects[0].categories.push(4)
})

console.log({
  someBigObject,
  clonedObjectWithChanges,
  clonedObjectWithChanges2
})