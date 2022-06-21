export default function cleanSet(set, startString) {
  const list = [];

  if (startString === '') {
    return '';
  }

  for (const subset of set) {
    if (subset.includes(startString)) {
      list.push(subset.replace(startString, ''));
    }
  }

  return list.join('-');
}
