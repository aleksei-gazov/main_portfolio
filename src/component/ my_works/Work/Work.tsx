import React from 'react';
import s from './Work.module.css'

type WorkPropsType = {
    title: string
    image: string
    description: string
}

const Work: React.FC<WorkPropsType> = ({title, image, description}) => {
    return (
        <div className={s.work}>
            <img className={s.img} src={image} alt="img work"/>
            <h3>{title}</h3>
            <span className="description">{description}</span>
        </div>
    );
};

export default Work;