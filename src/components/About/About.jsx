import React from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils";


export const About = () => {
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>A propos</h2>
        <div className={styles.content}>
            <img 
                className={styles.aboutImg}
                src={getImageURL("about/Laptop.png")}
                alt="Me on laptop"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>IA</h3>
                        <p>Je cherche actuellement avec mes études à me spécifier dans l'Intelligence Artificielle.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Dev web</h3>
                        <p>De par mes études et mes projets personnels, j'ai pu développer des compétences dans le domaine du développement web.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )   
};