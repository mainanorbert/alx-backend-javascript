export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot Process');
  }
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
