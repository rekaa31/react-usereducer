import React, { useRef, useEffect, useReducer  } from 'react'
import { initState } from './StopwatchAction';
import { StopwatchReducer } from './StopwatchReducer';

const Stopwatch = () => {

    // Use Reducer 
    const [state, dispatch] = useReducer(StopwatchReducer, initState);

    const idRef = useRef(0);

    useEffect(() => {
        if (!state.isRunning) {
            return;
        } else {
            idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
            return () => {
                clearInterval(idRef.current);
                idRef.current = 0;
            };
        }
    }, [state.isRunning]);

    return (
        <div className="stopwatch">
            {state.count}s
            <div>
                <button onClick={() => dispatch({ type: "start" })}>Start</button>
                <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
