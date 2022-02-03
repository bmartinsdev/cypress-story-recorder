import { kEventType, kActions, type ContentHandlerResponse } from "../types";
export class ContentHandler {
    controller: AbortController;
    handler: any = {
        [kEventType.MOUSE_DOWN]: (event: Event) => {
            console.log({ 'mousedown': event });
        },
        [kEventType.MOUSE_UP]: (event: Event) => {
            console.log({ 'mouseup': event });
        },
        [kEventType.KEY_UP]: (event: Event) => {
            console.log({ 'keyup': event });
        }
    }

    constructor() {
        this.initListeners();
    }

    initListeners(): void {
        // Listen to runtime messages
        chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse) => {
                if (this[request.action]) {
                    const response = this[request.action](request.context);
                    sendResponse(response);
                }
            }
        );
    }

    [kActions.START](): ContentHandlerResponse {
        this.controller = new AbortController();

        // Listen to dom events
        for (const event of Object.keys(this.handler)) {
            document.addEventListener(event, this.handler[event], { capture: true, passive: true, signal: this.controller.signal });
        }

        return {
            action: kActions.START,
            data: true
        }
    }

    [kActions.STOP](): ContentHandlerResponse {
        this.controller.abort();

        return {
            action: kActions.STOP,
            data: true
        }
    }
}

const listener = new ContentHandler();