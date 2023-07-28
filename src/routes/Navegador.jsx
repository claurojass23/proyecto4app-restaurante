import { NavLink } from 'react-router-dom'
import './navegador.css'

export default function Navegador() {
  return (
    <>
    <nav className='navegador'>
        <div className='conteiner'>
          
            <div className='logopages'>restaurante</div>
            <ul className='Navmenu'>
             <li className='NavItem'><NavLink to="/Nosotros">Sobre nosotros</NavLink></li>
              <li className='NavItem'><NavLink to="/Menu">Menu</NavLink></li>
              <li className='NavItem'><NavLink to="/Reservasiones">Reservaciones</NavLink></li>
              <li className='NavItem'><NavLink to="/Signup">Sign Up</NavLink></li>
              <li className='NavItem'><NavLink to="/Signin">Sign In</NavLink></li>
            
            </ul>
              
            
        </div>
       </nav>
    </>
  )
}
