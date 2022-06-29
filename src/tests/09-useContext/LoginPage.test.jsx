import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { UserContext } from "../../09-useContext/context/useContext"
import { LoginPage } from "../../09-useContext/LoginPage"



describe('Pruebas en <LoginPage />', () => { 
const user = {id:123, name: 'Santiago', email: 'san@google.com'}
    test('debe de llamar el componente sin el usuario', () => {
        render(
        <UserContext.Provider value={{user: null}}>
        <LoginPage/>
        </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        // console.log(preTag);
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()

    })
    test('debe de llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn()
        render(

            <UserContext.Provider value={{user:null, setUser : setUserMock}} >
            <LoginPage/>
            </UserContext.Provider>
            )

            const buttonPre = screen.getByRole('button')
            // console.log(buttonPre);
            fireEvent.click(buttonPre)
            // screen.debug()
            expect(setUserMock).toHaveBeenCalled();
            expect(setUserMock).toHaveBeenCalledWith({id:123, name: 'Santiago', email: 'san@google.com'});
     })
 })