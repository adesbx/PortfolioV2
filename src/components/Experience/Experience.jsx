import React from "react";
import styles from "./Experience.module.css";
import { getImageURL } from "../../utils";


export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title} >Experience</h2>
            <div className={styles.content}>
                <h3 className={styles.contentTitle} >J'utilise beaucoup</h3>
                <div className={styles.contentRow}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"/>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.contentTitle} >J'utilise</h3>
                <div className={styles.contentRow}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"/>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.contentTitle} >J'ai déjà utilisé</h3>
                <div className={styles.contentRow}>   
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-original.svg"/>
                </div>
            </div>
        </section>
    )   
};