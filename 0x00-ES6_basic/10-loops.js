export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return arr;
}
