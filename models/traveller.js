const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  // create a variable to store the anonymous function 
  // maps each journey start location object property in the array to a new array. Returns the variable i.e array storing this info as startLocations

  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations;

};

Traveller.prototype.getJourneyEndLocations = function () {

  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations;

};

Traveller.prototype.getJourneysByTransport = function (transport) {

  // filter method states on rhs that for each iteration of a "journey" journey.transport object equals the input of "transport" in the function method  input on line 22

  const journeyByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeyByTransport;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  // filters each journey iteration by its journey.distance object property and returns where this object property is greater than or equal to the minDistance provided

  const journeyByMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeyByMinDistance;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  // apply a reduce to the journey list and accumulate each journey.distance object starting from 0 to provide the total distance. Journeys is a journey object containing a distance attribute. Each traveller has multiple journeys.

  const totalDistance = this.journeys.reduce((acc, journey) => acc + journey.distance, 0);
  return totalDistance;
  

};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const uniqueModes = [...new Set(this.journeys.map(journey => journey.transport))];
  return uniqueModes

};


module.exports = Traveller;
