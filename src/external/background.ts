class EventHandler {
    tabId: number;

    async init(tabId: number): Promise<void> {
        if (this.tabId) return;
        this.tabId = tabId;

        chrome.scripting.executeScript({
            target: { tabId: this.tabId },
            files: ['build/content.js']
        });
    }

    log(msg: string): void {
        console.log(msg);
    }
}

const eventHandler = new EventHandler();

// Listen to any messages from extension
chrome.runtime.onMessage.addListener(msg => {
    if (eventHandler[msg.action]) eventHandler[msg.action](msg.context);
});

export { };