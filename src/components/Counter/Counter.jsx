import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        // setCounter((prevCounter) => prevCounter + 1);
        ChangeCounter(counter + 1)
    };

    const decrementCounter = () => {
        ChangeCounter(counter - 1)
        // setCounter((prevCounter) => prevCounter - 1);
    };

    const ChangeCounter = (value) => {
        setCounter(value)
    }

    return (
        <>
            <button data-testid="increment" onClick={incrementCounter}>
                +
            </button>
            <p data-testid="counter">{counter}</p>
            <button disabled data-testid="decrement" onClick={decrementCounter}>
                -
            </button>
        </>
    );
};

export default Counter;