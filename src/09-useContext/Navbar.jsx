import { Link,NavLink } from "react-router-dom"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">useContext</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` } to='/'>
            Home
          </NavLink>
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` }  to='/About'>
            About
          </NavLink>
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` }  to='/Login'>
            Login
          </NavLink>
        </ul>
      </div>
    </div>
  </nav>
  )
}


// Un contexto es toda la estructura del componente