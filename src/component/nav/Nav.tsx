import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.link} href="src/component/nav">Главная</a>
            <a className={s.link} href="src/component/nav">Скилы</a>
            <a className={s.link} href="src/component/nav">Проекты</a>
            <a className={s.link} href="src/component/nav">Контакты</a>
        </div>
    );
};

export default Nav;