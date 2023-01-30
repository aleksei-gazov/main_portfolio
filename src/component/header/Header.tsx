import React from 'react';
import Nav from '../nav/Nav';
import s from './Header.module.css'
import c from '../../comman/styles/Container.module.css'


const Header = () => {
    return (
        <div className={s.header}>
              <div className={c.container}>
            <Nav/>
        </div>
        </div>
    );
};

export default Header;