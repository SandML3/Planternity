// import { Link } from 'react-router-dom';
import '../styles/UserProfile.scss';
import logo from '../images/logo_white.svg'




const UserProfile = (props) => {


  return <>
      <header className='header__user'>
        <h1 className='header__user__title'>¿Lista para empezar?</h1>
        <img className='logo' src={logo} alt='logo' title='Logo'/>
        <div className='header__user__menu'>
            <button className='button__menu'>Buscar</button>
            <button className='button__menu'>Mis plantitas</button>
            <button className='button__menu'>Más información</button>
        </div>

      </header>
      <main className='main'>


      </main>
  </>
};
export default UserProfile;