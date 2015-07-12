exports = module.exports = {};

exports.mixinNotification = function () {
  this.toString = function () {
    return 'Name: ' + this.name + ', Body: ' + this.body + ', Type: ' + this.type;
  }
};

exports.mixinNotifier = function (facade) {
  this.sendNotification = function(name, body, type) {
    facade.sendNotification(name, body, type);
  }
};
