var observer = require('../lib/observer');
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
var assert = chai.assert;
var expect = chai.expect;

describe('Observer', function () {
  describe('notification', function () {
    it('should have descriptive toString', function () {
      var n1 = {
        name: 'foo',
        body: 'bar',
        type: 'baz'
      };
      observer.mixinNotification.call(n1);
      assert.equal('Name: foo, Body: bar, Type: baz', n1.toString());
    })
  });

  describe('notifier', function () {
    it('can send notifications', function () {
      var notifier = {};
      var facade = {
        sendNotification: sinon.spy()
      };

      observer.mixinNotifier.call(notifier, facade);
      // Examples showing use of optional args
      notifier.sendNotification('abc');
      notifier.sendNotification('xyz', [1, 2, 3]);
      notifier.sendNotification('asdf', {a: 1}, 'qwerty');

      expect(facade.sendNotification).to.have.callCount(3);
      expect(facade.sendNotification).to.have.been.calledWithExactly('abc', undefined, undefined);
      expect(facade.sendNotification).to.have.been.calledWithExactly('xyz', [1, 2, 3], undefined);
      expect(facade.sendNotification).to.have.been.calledWithExactly('asdf', {a: 1}, 'qwerty');
    });
  });
});
