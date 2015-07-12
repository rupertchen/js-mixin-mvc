exports = module.exports = {};

exports.mixinNotification = function () {
  this.toString = function () {
    return 'Name: ' + this.name + ', Body: ' + this.body + ', Type: ' + this.type;
  }
}
