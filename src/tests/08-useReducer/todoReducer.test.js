import { todoReducer } from "../../08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => { 
    // Estado Inicial de un Reducer
    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false,
    }]
    test('debe de regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => {
        const action = {
            type: 'ADDTODO',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe de eliminar un todo', () => {
            const action = {
               type: "REMOVETODO",
               payload: 1
            }
      const newState = todoReducer(initialState,action);
      expect(newState.length).toBe(0);
    })
   test('debe de realizar el Toggle del todo', () => {
    const action = {
        type: "TOGGLETODO",
        payload: 1
     }
     const newState = todoReducer(initialState,action);
     console.log(newState)
    })
 })