function Ship(itinerary) {
  this.itinerary = itinerary;
  this._itineraryPortPosition = 0;
  this.currentPort = this.itinerary.ports[this._itineraryPortPosition];
  this.currentPort.addShip(this);
  this.previousPort = null;
}

Ship.prototype.setSail = function () {
  this.previousPort = this.currentPort;
  this.currentPort.removeShip(this);
  this.currentPort = null;
};

Ship.prototype.dock = function (port) {
  this._itineraryPortPosition++;
  this.currentPort = this.itinerary.ports[this._itineraryPortPosition];
  this.currentPort.addShip(this);
};

module.exports = Ship;
