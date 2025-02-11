
import './Nav.scss'
import { MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";

function NavBot() {
  return (
    <section>
        <NavLink className="Settings" to="/configuracion"><MdSettings /></NavLink>
    </section>
  )
}

export default NavBot
