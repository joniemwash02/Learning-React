import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
    const reset = () => {
        setCount(0)
    }
    const decrement = () => {
        setCount((prevCount) => {
            return prevCount - 1
        })
         setCount((prevCount) => {
            return prevCount - 1
        })
         setCount((prevCount) => {
            return prevCount - 1
        })
         setCount((prevCount) => {
            return prevCount - 1
        })
    }
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={increment} >Increment</button>
            <button onClick={reset} >Reset</button>
            <button onClick={decrement} >Decrement</button>
        </div>
    )
}

export default Count
