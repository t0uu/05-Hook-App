import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (iterationNumber = 1) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahí vamos...');
    }

    return  `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {
    const {counter,increment}  =  useCounter();
    const [show, setShow] = useState(true)
    // El useMemo memoriza un valor, lo que va a regresar heavyStuff es valor del counter y termina memorizado en MessageMemorize y solo se memorizara si las dependencias cambian en este caso las de counter
    const messageMemorize = useMemo(() => heavyStuff(counter),[counter])
    return (
    <>
    <h1>Counter: <small>{counter}</small></h1>
    <hr/>
    <h4>{messageMemorize}</h4>
    <button
    className="btn btn-primary" onClick={() => increment()}>
        +1
    </button>

    <button className="btn btn-ounline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
    </button>
    </>
  )
}
