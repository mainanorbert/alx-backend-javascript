export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighbourhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
