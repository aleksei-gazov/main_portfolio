import React from 'react';
import s from './Contacts.module.css'
import c from '../../comman/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
              <div className={s.content}>
              <h2>contacts</h2>
              <form className={s.form} action="">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
              </form>
                <button className={s.button}>send</button>
              </div>
                
            </div>
     
        </div>
    );
};

export default Contacts;