export default function getNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighbourhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
