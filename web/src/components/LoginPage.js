import { Link } from 'react-router-dom';

import headerImage from '../images/login_header.jpg';
import logo from '../images/logo_color.svg'

import '../styles/LoginPage.scss';
import InputText from './InputText';


const LoginPage = (props) => {

  const handleInput = (ev) => {
    console.log(ev.target.value)
  }


  return <>
    <header className='header__login'>
        <img src={headerImage} className='header__login__image' alt='' title=''/>
        <img src={logo} className='header__login__logo' alt='' title=''/>
        <h1 className='header__login__title'> ¡Bienvenido! </h1>
        <p>Inicia sesión para seguir aprendiendo</p>
    </header>
    <main className='main__login'>
        <form className='main__login__form'>
 
            <div>
                <InputText
                name='email'
                user={'holi'}
                handleInput={handleInput}
                labelText='Dirección de correo electrónico'
                placeholder='Dirección de correo'
                />
            </div>
            
            <div>
                <InputText
                name='password'
                user={'caracoli'}
                handleInput={handleInput}
                labelText='Contraseña'
                placeholder='Contraseña'
                />
            </div>
            
        </form>

        <p className='main__login__link'>¿Todavía no tienes una cuenta? <Link className='in-line__link' to='/sign-up'>Regístrate gratis</Link></p>
    </main>
  
  
  
  
  </>
};

export default LoginPage;