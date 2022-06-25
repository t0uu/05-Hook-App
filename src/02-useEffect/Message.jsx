import { useEffect,useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0})
useEffect(() => {
//  console.log('Message Mounted');
// Para remover el espacio en memoría, necesitamos hacer referencia a la función, mediante otra función haria referencia a lo que necesitamos.
 const onMouseMove = ({x,y}) => {
    // const coords = {x,y}
    setCoords({x,y})
}
 window.addEventListener('mousemove', onMouseMove)


  return () => {
    // console.log('Message UnMounted');
    // aquí cortamos la referencia.
 window.removeEventListener('mousemove', onMouseMove)
  }
}, [])


    return (

    <>
    <h3>Usuario ya existe</h3>
    {JSON.stringify(coords)}
    </>
  )
}
