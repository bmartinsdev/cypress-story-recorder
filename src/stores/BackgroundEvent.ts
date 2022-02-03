import { writable } from 'svelte/store'
import { kActions, type ContentHandlerResponse } from "../types";

function bgEvents() {
    const { set, update, subscribe } = writable([]);

    const sendMessageToContent = message => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, message,
                (res: ContentHandlerResponse) => {
                    chrome.runtime.sendMessage(
                        { action: 'log', context: res }
                    );
                });
        });
    };

    return {
        init: () => {
            // Tell background to inject content script
            chrome.runtime.sendMessage(
                { action: 'init', context: chrome.devtools.inspectedWindow.tabId }
            );
        },
        start: () => {
            sendMessageToContent({ action: kActions.START });
        },
        stop: () => {
            sendMessageToContent({ action: kActions.STOP });
        },
        set: value => set(value),
        subscribe
    };
}
const logs = bgEvents();
export default logs;