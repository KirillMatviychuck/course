import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(1)
    const counterHandler = () => setCounter(counter + 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button className="button" onClick={counterHandler}>increment</button>
        </div>
    )
}