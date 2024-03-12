export default function hasValuesFromArray(set, arr) {
  return arr.every((v) => set.has(v));
}
