exports = module.exports = {};

exports.mixinModel = function (facade) {
  var proxies = {};

  this.hasProxy = function (proxyName) {
    return Boolean(proxies[proxyName]);
  };

  this.registerProxy = function (proxy) {
    // TODO: Do we need to guard against repeat additions?
    proxy.initializeNotifier(facade);
    proxies[proxy.getProxyName()] = proxy;
    proxy.onRegister && proxy.onRegister();
  };

  this.retrieveProxy = function (proxyName) {
    return proxies[proxyName];
  };

  this.removeProxy = function (proxyName) {
    var proxy = proxies[proxyName];
    if (proxy) {
      proxies[proxyName] = undefined;
      proxy.onRemove && proxy.onRemove();
    }
    return proxy;
  };
};
