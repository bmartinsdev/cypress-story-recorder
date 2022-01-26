function createLogger() {
    return {
        log: (log: string) => {
            chrome.runtime.sendMessage(
                { action: 'log', context: log }
            );
        },
        init: () => {
            chrome.runtime.sendMessage(
                { action: 'init', context: chrome.devtools.inspectedWindow.tabId }
            );
        }
    };
}
const logs = createLogger();
export default logs;