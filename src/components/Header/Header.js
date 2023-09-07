import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';


function Header(props) {
  
  return (
    <Routes>
      <Route path='/' element={
        <header className='header_main'>
          <div className='header__container header__container_main'>
          <Link className='header__logo' to='/'></Link>
            <div className='header__auth'>
              <Link className='header__signup' to='/signup'>Регистрация</Link>
              <Link className='header__signin' to='/signin'>Войти</Link>
            </div>
          </div>
        </header>
      } />
      {['/movies', '/saved-movies', '/profile',].map(path =>
        <Route path={path} key={path} element={
          <header className='header'>
            <div className='header__container'>
            <Link className='header__logo' to='/'></Link>
              <div className='header__links'>
                <Link className='header__link header__link_active' to='/movies'>Фильмы</Link>
                <Link className='header__link' to='/saved-movies'>Сохранённые фильмы</Link>
              </div>
              <Link className='header__account' to='/profile'>
                <span>Аккаунт</span>
                <div className='header__icon' />
              </Link>
              <button 
              className='header__menu' 
              type='button'
              onClick={props.openMenu} />
            </div>
          </header>
        } />
      )}
    </Routes>
  )
}

export default Header;