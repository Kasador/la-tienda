import './Header.scss'
import Logo from '../logo/Logo';
import { FaRegUserCircle } from "react-icons/fa";

const styles = {
  fontSize: '30px'
}

function Header() {
  return (
    <header>
        <Logo logoHeader="La Choza" />
        <div className='UserProfile'>
          <span>Username</span>
          <FaRegUserCircle style={styles}/>
        </div>
    </header>
  )
}

export default Header
