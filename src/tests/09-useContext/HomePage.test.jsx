import {render,screen} from '@testing-library/react'
import { UserContext } from '../../09-useContext/context/useContext'
import { HomePage } from '../../09-useContext/HomePage'

describe('Pruebas en <HomePage/>', () => { 
    const user = {
        id: 1,
        name: 'Santiago'
    }
    test('debe de mostrar el componente sin el usuario', () => { 

        render(
        // Si el HomePage no tendria el UserContext.Provider daria error. ya que no puede encontrar el context.
        // Necesitamos el Provider para proveer dicha información
        <UserContext.Provider value={{user: null}}>
        <HomePage/>
        </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        // console.log(preTag);
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    })
    test('debe de mostrar el componente con el usuario', () => { 

     
        render(
        // Si el HomePage no tendria el UserContext.Provider daria error. ya que no puede encontrar el context.
        // Necesitamos el Provider para proveer dicha información
        <UserContext.Provider value={{user}}>
        <HomePage/>
        </UserContext.Provider>
        )
        screen.debug()
        const preTag = screen.getByLabelText('pre');
        console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())
        // screen.debug()
    })
 })