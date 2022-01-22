const ports = {}

chrome.runtime.onConnect.addListener(port => {
    console.log(port);
})

function init() {
    one.onMessage.addListener(lOne)
    function lOne(message) {
        if (message.event === 'log') {
            // eslint-disable-next-line no-console
            return console.log('tab ' + id, message.payload)
        }
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.log('%cdevtools -> backend', 'color:#888;', message)
        }
        two.postMessage(message)
    }
}