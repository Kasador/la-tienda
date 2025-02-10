import './Nav.scss'
import { MdShoppingCart, MdInventory, MdBarChart, MdPeople, MdSettings } from "react-icons/md";
import { GiHut } from "react-icons/gi";

function Header() {
  return (
    <nav>
        <ul>
            <li><a href="#"><GiHut /> Dashboard</a></li>
            <li><a href="#"><MdShoppingCart /> Ventas</a></li>
            <li><a href="#"><MdInventory /> Productos</a></li>
            <li><a href="#"><MdBarChart /> Reportes</a></li>
            <li><a href="#"><MdPeople /> Usuarios</a></li>
            <li><a href="#"><MdSettings /> Configuración</a></li>
        </ul>
    </nav>
  )
}

export default Header
