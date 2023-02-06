import React from 'react';
import s from './Skills.module.css'
import c from '../../comman/styles/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                        <Skill  title={'React'} description={'Authoritatively mesh robust web services and web-enabled ROI. '}/>
                        <Skill title={'TypeScript'} description={'Authoritatively mesh robust web services and web-enabled ROI. '}/>
                        <Skill title={'Css'} description={'Authoritatively mesh robust web services and web-enabled ROI. '}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;