import React from 'react'

export default function ButtonPad({incrementCount, decrementCount, resetCount}) {
    return (
        <div>
            <button onClick = {incrementCount}>Increase (+1)</button>
            <button onClick = {decrementCount}>Decrease (-1)</button>
            <button onClick = {resetCount}>Reset </button>
        </div>
    );
}
