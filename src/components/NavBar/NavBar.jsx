import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1 style={{color:"red"}}> GIMA MARKET</h1>

        <nav>
            <ul>
                <li>Kinesiología</li>
                <li>Fisioterapia</li>
                <li>Estética</li>
            </ul>
        </nav>

        <CartWidget />
      
    </header>
  )
}

export default NavBar
