import { useState } from "react"

const CounterApp = () => {
    // Dentro del useState podemos tener lo que necesitemos.
const [counter, setcounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
})
 const {counter1,counter2,counter3} = counter
   
    return (
    <>
    <h1>Counter: {counter1}</h1>
    <h2>Counter: {counter2}</h2>
    <h3>Counter: {counter3}</h3>
    <hr/>

    <button className="btn bg-success " onClick={() => setcounter({
        ...counter,
        counter1: counter1 + 1,
    })}>+1</button>
    </>
  )
}

export default CounterApp