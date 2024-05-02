const calculateNumber = (type, a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  switch (type) {
    case 'ADD':
      return roundA + roundB;
    case 'SUBTRACT':
      return roundA - roundB;
    case 'DIVIDE':
      if (roundB === 0) {
        return 'Error';
      }
      return roundA / roundB;
    default:
      throw new Error('Invalid type. Type must be ADD, SUBTRACT, or DIVIDE.');
  }
};

module.exports = calculateNumber;