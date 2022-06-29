import { render,screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp"
import { useTodos } from "../../hooks/useTodos"


jest.mock('../../hooks/useTodos')

describe('Pruebas en <TodoApp/>', () => { 

    // Esto dara error porque está intentado de desestrucutrar algo de undefined
    beforeEach(() => {
        useTodos.mockReturnValue({
            todos: [
            {id: 1, description: 'TODO #1', done: false},
            {id: 2, description: 'TODO #2', done: true},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    })
        })

    test('debe de mostrar el componente correctamente', () => {


        render(<TodoApp/>)
        // screen.debug()

        expect(screen.getByText('TODO #1')).toBeTruthy();
        expect(screen.getByText('TODO #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
 })


