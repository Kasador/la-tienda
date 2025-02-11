import './Nav.scss'
import { MdShoppingCart, MdInventory, MdBarChart, MdPeople } from "react-icons/md";
import { GiHut } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <ul className="ubuntu-bold">
            <li><NavLink to="/"><GiHut /> &nbsp;Dashboard</NavLink></li>
            <li><NavLink to="/ventas"><MdShoppingCart /> &nbsp;Ventas</NavLink></li>
            <li><NavLink to="/productos"><MdInventory /> &nbsp;Productos</NavLink></li>
            <li><NavLink to="/reportes"><MdBarChart /> &nbsp;Reportes</NavLink></li>
            <li><NavLink to="/usuarios"><MdPeople /> &nbsp;Usuarios</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav
