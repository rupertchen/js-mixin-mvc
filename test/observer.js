var assert = require('assert');
var observer = require('../lib/observer');
describe('Observer', function () {
  describe('notification mixin', function () {
    it('should have descriptive toString', function () {
      var n1 = {
        name: 'foo',
        body: 'bar',
        type: 'baz'
      };
      observer.mixinNotification.call(n1);
      assert.equal('Name: foo, Body: bar, Type: baz', n1.toString());
    })
  })
});
