import React from 'react'
import './Header.scss'
import {Link} from "@tanstack/react-router";

const Header = () => {

    return (
        <header className='header'>
            <img src='src/assets/logo.svg' alt='Логотип' className='header__logo'/>
            <nav className="header__nav">
                <ul className="nav__list">
                        <li className="nav__item">
                            Услуги
                        </li>
                        <li className="nav__item">
                            Документы
                        </li>
                        <li className="nav__item">
                            Заявления
                        </li>
                        <li className="nav__item">
                            Платежи
                        </li>
                        <li className="nav__item">
                            Помощь
                        </li>
                        <li className="nav__item">
                            <div className="nav__search-login">
                                <img src='src/assets/Search.svg' alt='Поиск' className='search'/>
                                <span className="login__link">
                                Войти
                            </span>
                            </div>
                        </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;