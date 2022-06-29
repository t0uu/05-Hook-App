import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useCounter } from "../../hooks/useCounter"

describe('Pruebas en el useCOunter', () => {

    test('debe de retornar los valores por defecto', () => {
        // El renderHook nos permite renderizar un Hook propiamente dicho
        // El renderHook nos regresar la información de como se encuentra ese hook en ese momento.
       const {result} = renderHook(() => useCounter())
      const {counter,decrement,reset,increment} = result.current;

      expect(counter).toBe(1);
      expect(decrement).toEqual(expect.any(Function));
      expect(increment).toEqual(expect.any(Function));
      expect(reset).toEqual(expect.any(Function));
    }) 
    test('debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100))
        const {counter} = result.current;
  
        expect(counter).toBe(100)
    })

    test('debe de incrementar el contador', () => {
        const {result} = renderHook(() => useCounter())
        const {counter,increment} = result.current;

        act(() => {
           increment();
           increment(2);
       })
        expect(result.current.counter).toBe(3)
    })
    test('debe de decrementar el contador', () => {
        const {result} = renderHook(() => useCounter())
        const {counter,decrement} = result.current;

        act(() => {
           decrement();
           decrement(2);
       })
        expect(result.current.counter).toBe(-2)
    })
    test('debe de resetear el contador', () => {
        const {result} = renderHook(() => useCounter())
        const {counter,reset,increment} = result.current;

        act(() => {
           increment(2)
           reset();
       })
        expect(result.current.counter).toBe(1)
    })
 })