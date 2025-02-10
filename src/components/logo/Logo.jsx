import './Logo.scss'
import LogoImg from '../../assets/images/logo.png';
import PropTypes from 'prop-types'; // import prop-types to fix warning message

function Logo(props) {
  return (
    <section>
        <img src={LogoImg} alt='Logo de La Choza' />
        <h1 className='logo-font'>{props.logoHeader}</h1>
    </section>
  )
}

Logo.propTypes = { // works like TypeScript
    logoHeader: PropTypes.string.isRequired
};

export default Logo
