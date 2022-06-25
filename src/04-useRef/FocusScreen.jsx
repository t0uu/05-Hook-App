import { useRef } from "react"

export const FocusScreen = () => {
    // La idea del useRef es que tengamos una referencia que sea controlable.
    const inputRef = useRef()
    const onClick = () => {
    //     document.querySelector('input').select()
       inputRef.current.select();
    }
  return (
    <>
    <h1>Focus Screen</h1>
    <hr/>

    <input ref={inputRef} type="text" placeholder="Ingrese su nombre" className="form-control"/>

    <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
        </button>    
    </>
  )
}
