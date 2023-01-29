import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="src/component/nav">Главная</a>
            <a href="src/component/nav">Скилы</a>
            <a href="src/component/nav">Проекты</a>
            <a href="src/component/nav">Контакты</a>
        </div>
    );
};

export default Nav;