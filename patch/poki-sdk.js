window.PokiSDK = {
    init: function() { return Promise.resolve(true); },
    commercialBreak: function() { return Promise.resolve(true); },
    rewardedBreak: function() { return Promise.resolve(true); },
    displayAd: function() {},
    destroyAd: function() {},
    setDebug: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    happyHour: function() {},
    roundStart: function() {},
    roundEnd: function() {},
    customEvent: function() {}
};
if (typeof pokiSDKLoaded === "function") pokiSDKLoaded();
