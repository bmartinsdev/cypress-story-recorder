export function initContent() {
    chrome.runtime.sendMessage(
        { action: 'log', context: 'initted' }
    );
}

initContent();