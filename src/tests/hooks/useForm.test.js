import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../hooks/useForm"


describe('Pruebas en el useForm', () => { 
    const initialForm = {
        name: 'Santiago',
        email: 'Santiago@google.com'
    }

    test('debe de regresar la información por defecto', () => {
        const {result}  = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })    
    })

    test('debe de cambiar el nombre del formulario', () => {
        const {result}  = renderHook(() => useForm());
        const {onInputChange} = result.current;
        const newValue = 'Juan'
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}})
        })
        expect(result.current.name).toEqual('Juan')
        expect(result.current.formState.name).toEqual('Juan')
    })
    test('debe de resetear el formulario', () => {
        const {result}  = renderHook(() => useForm());
        const {onResetForm,onInputChange} = result.current;
        const newValue = 'Juan'
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}})
            onResetForm({username: '' })
        })
        expect(result.current.name).toBe()
        expect(result.current.formState.name).toBe()
    })
 })