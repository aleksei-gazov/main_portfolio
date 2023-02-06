import React from 'react';
import s from './Contacts.module.css'
import c from '../../comman/styles/Container.module.css'


const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={c.container}>
              <div className={s.content}>
              <h2>contacts</h2>
              <form className={s.form} action="">
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                  <textarea className={s.textarea}/>
                  <input className={s.button} value={'send'} type="button"/>
              </form>
              </div>
                
            </div>
     
        </div>
    );
};

export default Contacts;