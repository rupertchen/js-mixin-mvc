var model = require('../lib/model');
var chai = require('chai');
var assert = chai.assert;

describe('Model', function () {
  it('can register, check, retrieve, and remove a proxy', function () {
    var m1 = {};
    var proxyName = 'proxy_1';
    var proxy = {
      initializeNotifier: function () {
      },
      getProxyName: function () {
        return proxyName;
      }
    };
    model.mixinModel.call(m1);

    assert.isFalse(m1.hasProxy(proxyName));

    m1.registerProxy(proxy);
    assert.isTrue(m1.hasProxy(proxyName));
    assert.strictEqual(m1.retrieveProxy(proxyName), proxy);

    m1.removeProxy(proxyName);
    assert.isFalse(m1.hasProxy(proxyName));
  });
});
