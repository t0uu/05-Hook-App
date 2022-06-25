import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'santiago@hotmail.com'
    })

    const {username,email} = formState
    
    const onInputChange = ({target}) => {
        const {name,value} = target
        // console.log({name,value});
        // Se manda a llamar setFormState, y lo desesctructuramos para no perder el valor anterior, y luego le decimos que es lo que queremos cambiar en este caso el name y lo ponemos entre llaves cuadradas y luego le decimos que sera igual al value que ingresara el usuario.
        setFormState({
            ...formState,
            [name]: value,
        })
    }

// El useEffect es utilizado para disparar efectos secundarios.

//   useEffect(() => {
//     console.log('useEffect called!');
//   },[]);
// No se recomienda poner un useEffect sin una dependencia,Las dependencias son las condiciones por las que ul useEffect se vuelva a disparar. Cuando ponemos un [] quiere decir que queremos que se dispare una vez.
// Se recomienda crear cada useEffect especifico por cada acción que deseamos crear.
useEffect(() => {
    // console.log('formState changed!');
},[formState])
useEffect(() => {
    // console.log('El email cambio!');
},[email])

// useEffect(() => {
// Tenemos el Callback
//     first
//   return () => {
// Tenemos la función de la limpieza, esta función la vamos a utilizar cuando queremos cancelar algún tipo de Listener para evitar que siga consumiendo memoria.
//     second
//   }
// }, [third])

  return (
    <>
    <h1>Formulario Simple</h1>
    <hr/>

    <input
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
    />
    <input
    type="email"
    className="form-control mt-3"
    placeholder="ejemplo@gmail.com"
    name="email"
    value={email}
    onChange={onInputChange}

    />
    {
        username === 'strider2' && <Message/>
    }
    </>
  )
}
