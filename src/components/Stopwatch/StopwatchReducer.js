// Reducer Function
export function StopwatchReducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isRunning: true };
        case "stop":
            return { ...state, isRunning: false };
        case "reset":
            return { isRunning: false, count: 0 };
        case "tick":
            return { ...state, count: state.count + 1 };
        default:
            throw new Error();
    }
}