import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
