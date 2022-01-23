(function () {
    'use strict';

    class EventHandler {
        log(msg) {
            console.log(msg);
        }
    }

    const eventHandler = new EventHandler();

    // Listen to any messages from extension
    chrome.runtime.onMessage.addListener(msg => {
        if (eventHandler[msg.action]) eventHandler[msg.action](msg.context);
    });

})();
