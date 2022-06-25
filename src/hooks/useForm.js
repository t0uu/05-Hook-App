import { useState } from "react"


export const useForm = (initialForm = {}) => {
                                            // Acá le estamos diciendo que nuestro formState sera lo que nosotros le mandemos como argumento mediante el initialForm.   
    const [formState, setFormState] = useState(initialForm)


    
    const onInputChange = ({target}) => {
        const {name,value} = target
        // console.log({name,value});
        // Se manda a llamar setFormState, y lo desesctructuramos para no perder el valor anterior, y luego le decimos que es lo que queremos cambiar en este caso el name y lo ponemos entre llaves cuadradas y luego le decimos que sera igual al value que ingresara el usuario.
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    const onResetForm = ({username,email,password}) => {
        setFormState({
            initialForm,
            username: '',
            email: '',
            password: ''
        })
    }

    return {
        // si lo mandas de esta manera evitariamos realizar una destructuración del formState
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
