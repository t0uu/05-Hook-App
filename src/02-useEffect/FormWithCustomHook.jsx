import { useEffect } from "react"
// import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

   const {formState,onInputChange,username,email,password,onResetForm} = useForm(
       {
           username: '',
           email: '',
           password: '',
       }
   )
//    const {username,email,password} = formState


// El useEffect es utilizado para disparar efectos secundarios.

//   useEffect(() => {
//     console.log('useEffect called!');
//   },[]);
// No se recomienda poner un useEffect sin una dependencia,Las dependencias son las condiciones por las que ul useEffect se vuelva a disparar. Cuando ponemos un [] quiere decir que queremos que se dispare una vez.
// Se recomienda crear cada useEffect especifico por cada acción que deseamos crear.
// useEffect(() => {
    // console.log('formState changed!');
// },[formState])
// useEffect(() => {
    // console.log('El email cambio!');
// },[email])

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
    <h1>Formulario Con CustomHook</h1>
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
    <input
    type="password"
    className="form-control mt-3"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}

    />
    
    <button onClick={onResetForm} className="btn btn-primary mt-3">Borrar</button>
    </>
  )
}
