export default function iterateThroughObject(reportWithIterator) {
  let result = [...reportWithIterator];
  result = result.join(' | ');

  return result;
}
