function createLogger() {
    return {
        log: (log: string) => {
            chrome.runtime.sendMessage(
                { action: 'log', context: log }
            );
        }
    };
}
const logs = createLogger();
export default logs;