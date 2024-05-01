function add (a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  return roundA + roundB;
}

module.exports = { add };
