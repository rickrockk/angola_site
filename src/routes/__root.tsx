import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import './__root.scss'
import Footer from "../components/Footer/Footer";
import React from "react";

export const Route = createRootRoute({
    component: () => (
        <div className="app">
            <header className='header'>
                <Link to="/">
                    <img src='src/assets/logo.svg' alt='Логотип' className='header__logo'/>
                </Link>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/notifications'>
                                Уведомления
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/documents'>
                                Документы
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/'>
                                Заявления
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/'>
                                Платежи
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/'>
                                Помощь
                            </Link>
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
            
            <Outlet />
            {/*<TanStackRouterDevtools />*/}
            <Footer/>
</div>
    ),
})