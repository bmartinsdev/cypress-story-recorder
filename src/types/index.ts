export enum kEventType {
    MOUSE_DOWN = 'mousedown',
    MOUSE_UP = 'mouseup',
    KEY_UP = 'keyup'
}

export enum kActions {
    START = 'startRecording',
    STOP = 'stopRecording',
    GET_EVENTS = 'getEvents'
}

export interface ContentHandlerResponse {
    action: kActions,
    event?: kEventType,
    data: any
}