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

  const journeyByMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeyByMinDistance;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
