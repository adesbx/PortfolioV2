import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageURL } from "../../utils";

export const ProjectCard = ({project : {title, image, description, skills, source}}) => {

    return(
        <div className={styles.container}>
            <img  src={getImageURL(image)} alt={`Image of ${title}`} className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                    <li key={id} className={styles.skill} >
                        {skill}
                    </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                {source != null ? <a href={source} className={styles.link}>Source</a> : <a></a>}
            </div>
        </div>
    )
};

