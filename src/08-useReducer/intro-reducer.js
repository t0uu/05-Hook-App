

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// Esto en teoria puede ser un Reducer, el Reducer recibirar dos estados que serian state que siempre suele ser igual a initialState y la action que es la que le dira al state como quiere que cambie
const todoReducer = (state = initialState, action = {}) => {

    // El termino correcto es siempre regresar un nuevo estado.
    if(action.type === 'TODO'){
        return [...state, action.payload]
    }


    // Siempre tiene que regresar un state
    return state;
}


let todos = todoReducer()
// console.log(todos)
// Cuando queremos hacerle una modificación a nuestro Reducer es mandarle una modificación y esa acción va a decirle como va a modificarse
const newTodo = {
        id: 2,
        todo: 'Recolectar la piedra del poder',
        done: false
    }
// Las acciones suele lucir de la siguiente manera.
const addTodoAction = {
    // LAs acciones se pueden mandar como lo necesitemos pero existe un estandar.
    // se suele utilizar type: 'AddTodo' ejemplo para llamar a la acción
    type: 'TODO',
    // luego suele enviarse una acción o payload (precarga) que seria lo que le enviariamos a la acción pero esto no es siempre necesario. 
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

// Si hacemos console log, en este caso solo aparecieria el state inicial, y no habría ningun cambio ya que no estamos realizando ninguna acción, es decir estamos recibiendo la acción pero dicha acción no esta haciendo nada.
console.log({state: todos})






// Esto es algo que no debemos hacer en React ya que estariamos mutando dicho estado y es una mala práctica 
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false
// })

// console.log(todos)