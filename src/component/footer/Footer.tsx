import React from 'react';
import s from './Footer.module.css'
import c from '../../comman/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={c.container}>
              <div className={s.content}>
              <h2>Aliaksei Hazau</h2>
                  <div className={s.contacts}>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                    <div className={s.divBlock}></div>
                  </div>
               <p>@ 2023 Все права защищены</p>
              </div>
                
            </div>
     
        </div>
    );
};

export default Footer;