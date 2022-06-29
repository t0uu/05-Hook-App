import { useState } from "react"
import { UserContext } from "./useContext"

// const user = {
//     id:123,
//     name: 'Fernando Herrera',
//     email: "fernando@google.com"
// }

// Los Higher Order Components lo que va a diferenciarlos de los tradicionales es que contienen unas propertys llamadas children o los hijos que el componente tendra, es completamente opcional
export const UserProvider = ({children}) => {

    const [user, setUser] = useState()
  return (
   <UserContext.Provider value={{user,setUser}}>
    {children}
   </UserContext.Provider>
  )
}
