import { kEventType } from "../constants";
export class ContentHandler {
    constructor() {
        this.emitToBackground();
        this.initListeners();
    }

    emitToBackground(): void {
        chrome.runtime.sendMessage(
            { action: 'log', context: 'initted' }
        );
    }

    initListeners(): void {
        for (const event of Object.values(kEventType)) {
            document.addEventListener(event, this.handleDomEvent, { capture: true, passive: true });
        }
    }

    handleDomEvent(event: Event): void {
        console.log(event);
    }
}

const listener = new ContentHandler();