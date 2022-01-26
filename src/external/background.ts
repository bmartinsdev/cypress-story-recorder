class EventHandler {
    injected: boolean = false;

    async init(tabId: number): Promise<void> {
        if (this.injected) return;
        console.log("injecting");

        chrome.scripting.executeScript({
            target: { tabId },
            files: ['build/content.js']
        });
    }

    log(msg: string): void {
        console.log(msg);
    }

    private async handleEvent(event: Event): Promise<void> {
        console.log(event);
    }
}

const eventHandler = new EventHandler();

// Listen to any messages from extension
chrome.runtime.onMessage.addListener(msg => {
    if (eventHandler[msg.action]) eventHandler[msg.action](msg.context);
});

export { };