// import { Link } from 'react-router-dom';
import '../styles/UserProfile.scss';
import logo from '../images/logo_color.svg'
import { Link } from 'react-router-dom';




const UserProfile = ({userData}) => {


  return <div className='page__user'>
      <header className='header__user'>
        <h1 className='header__user__title'>¡Bienvenida, {userData.name}!</h1>
        <p className='header__user__text'>Prepara la pala y la regadera, que empezamos.</p>
        <Link to='/' title='Volver a Home' ><img className='logo' src={logo} alt='logo' title='Logo'/></Link>

        <div className='header__user__menu'>
            <button className='button__menu'>Buscar</button>
            <button className='button__menu'>Mis plantitas</button>
            <button className='button__menu'>Más información</button>
        </div>

      </header>
      
  </div>
};
export default UserProfile;