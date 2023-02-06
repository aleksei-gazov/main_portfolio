import React from 'react';
import s from './My_works.module.css'
import c from '../../comman/styles/Container.module.css'
import Work from './Work/Work';

const MyWorks = () => {
    return (
        <div id={'progect'} className={s.MyWorksBlock}>
            <div className={`${c.container} ${s.MyWorksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.work}>
                    <Work title={'Todolist'} image={'img'}
                          description={'description'}/>
                    <Work title={'Todolist'} image={'img'}
                               description={'description'}/>

                </div>
            </div>
        </div>
    );
};

export default MyWorks;