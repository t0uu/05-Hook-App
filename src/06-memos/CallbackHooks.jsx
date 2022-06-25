import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHooks = () => {

const [counter, setCounter] = useState(10);

// El useCallback sirve para memoriza funciones. Esa función memoriza solo se va a volver a procesar cuando algo cambie.
const increment = useCallback(
  (value) => {
    // estamos a volviendo a llamar está función pero el estado no cambia.
    setCounter((c) => c + value)
  },
  [],
)


// const increment = () => {
    // setCounter(counter + 1)
// }

    return (
   <>
   
   <h1>useCallback Hook: {counter}</h1>
   <hr/>

   <ShowIncrement increment={increment} />
   </>
  )
}
