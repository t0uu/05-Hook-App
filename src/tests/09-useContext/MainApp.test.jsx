import {render,screen} from "@testing-library/react"
import {MemoryRouter} from 'react-router-dom'
import { MainApp } from "../../09-useContext/MainApp"
describe('Pruebas en <MainApp/>', () => { 

    test('debe de mostrar el HomePage', () => { 

        render(
            // El MemoryRouter proporciona todo lo necesario para realizar las pruebas del router 
            <MemoryRouter>
            <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByText('HomePage')).toBeTruthy()
        // screen.debug()

     })
     test('debe de mostrar el LoginPage', () => { 

        render(
            // Para testear una ruta diferente necesitamos el initialEntries
           <MemoryRouter  initialEntries={['/login']}>
            <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByText('LoginPage')).toBeTruthy()
        screen.debug()

     })
 })