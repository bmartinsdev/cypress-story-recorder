import { writable } from 'svelte/store';
const initialValue: Array<string> = [];
function createCounts() {
    const { subscribe, set, update } = writable(initialValue);

    return {
        subscribe,
        add: (log) => update(n => [...n, log]),
        clear: () => set(initialValue)
    };
}
const logs = createCounts();
export default logs;