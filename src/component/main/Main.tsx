import React from 'react';
import s from './Main.module.css'
import c from '../../comman/styles/Container.module.css'

const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text}>
                    <span>Main Portfolio</span>
                    <h1>Main name Aleks</h1>
                    <p>I`m frontend developer
                    </p>
                </div>
                <div className={s.photo}>

                </div>
            </div>

        </div>
    );
};

export default Main;