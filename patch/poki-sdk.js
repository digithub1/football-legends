// Universal PokiSDK Stub
(function() {
    function makeProxy() {
        return new Proxy(function() { return Promise.resolve(true); }, {
            get: function(target, prop) {
                if (prop === 'then') return undefined;
                return function() { return Promise.resolve(true); };
            }
        });
    }
    var mock = makeProxy();
    window.PokiSDK = mock;
    window.PokiSDK.init = function() { return Promise.resolve(true); };
    window.PokiSDK.gameLoadingStart = function() {};
    window.PokiSDK.gameLoadingProgress = function() {};
    window.PokiSDK.gameLoadingFinished = function() {};
    window.PokiSDK.commercialBreak = function() { return Promise.resolve(true); };
    window.PokiSDK.rewardedBreak = function() { return Promise.resolve(true); };
    window.PokiSDK.displayAd = function() {};
    window.PokiSDK.destroyAd = function() {};
    window.PokiSDK.gameplayStart = function() {};
    window.PokiSDK.gameplayStop = function() {};
    window.PokiSDK.setDebug = function() {};
    if (typeof window.pokiSDKLoaded === 'function') window.pokiSDKLoaded();
})();
