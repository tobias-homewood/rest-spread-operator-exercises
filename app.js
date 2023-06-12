const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

let array1 = [5, 4, 3, 5];
let array2 = [3, 6, 7, 8];

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => ({ ...obj1, obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });
