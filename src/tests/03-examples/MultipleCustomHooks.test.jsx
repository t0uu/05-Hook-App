import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch.js');
jest.mock('../../hooks/useCounter.js');

describe('Pruebas en MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
    // En cada test creamos el snapshot , el beforeEach se ejecuta antes que se realice cada uno de ellos. Si utilizamos useCounter.mockReturnValue en cada prueba ya no muestra ese error
    // Antes de que cada prueba
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement,
        });
        jest.clearAllMocks();
    })
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })


        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quoates'));

        const nextButton = screen.getByRole('button',{name:'Next Quote'})
        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeTruthy();
        // screen.debug();
    })

    test('debe de mostrar un Quote', () => { 
        useFetch.mockReturnValue({
            data: [{author: 'Santiago', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        })


        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Santiago')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:'Next Quote'})
        expect(nextButton.disabled).toBeFalsy();

     })

     test('debe de llamar la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Santiago', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks/>)
        // const increment = jest.fn()
        const nextButton = screen.getByRole('button',{name:'Next Quote'})
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()

     })

 })