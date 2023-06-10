function Ship(startingPort) {
  this.startingPort = startingPort;
  this.currentPort = startingPort;
}

Ship.prototype.setSail = function () {
  this.startingPort = null;
};

Ship.prototype.dockTo = function (port) {
  this.currentPort = port;
};

module.exports = Ship;
