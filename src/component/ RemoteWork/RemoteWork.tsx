import React from 'react';
import s from './RemoteWork.module.css'
import c from '../../comman/styles/Container.module.css'


const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={c.container}>
              <div className={s.content}>
              <h2>Considering remote work options</h2>
                <button className={s.button}>hire me</button>
              </div>
                
            </div>
     
        </div>
    );
};

export default RemoteWork;