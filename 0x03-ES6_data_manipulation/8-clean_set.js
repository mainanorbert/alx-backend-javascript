export default function cleanSet(set, startString) {
  const filValues = [...set].filter((value) => value.startsWith(startString));
  return filValues.map((v) => v.substring(startString.length)).join('-');
}
