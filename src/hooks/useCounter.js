import { useState } from "react"

 export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = (value) => {
        if(counter === 0) return
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(initialValue)
    }    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
