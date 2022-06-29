import { Navigate, Route, Routes,Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
    <h1>MainApp</h1>
    {/* Esto no es conveniente,ya que genera un full refresh y en ese caso cargariamos todos los componentes y librerias. */}
    {/* <a href="/">Home</a> */}
    {/* <a href="/About">About</a> */}
    {/* <a href="/Login">Login</a> */}
    
    {/* La forma correcta es de está manera */}
    <Navbar/>
    <hr/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="About" element={<AboutPage/>} />
        {/* <Route path="/*" element={<LoginPage/>}/> */}
        <Route path="/*" element={<Navigate to="/about"/>}/>
    </Routes>
    </UserProvider>
  )
}
