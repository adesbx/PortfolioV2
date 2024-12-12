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
                        <h3>LLM</h3>
                        <p>Les modèles de langage (LLM) m’inspirent par leur capacité à comprendre et générer du texte avec une précision impressionnante.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Deep learning</h3>
                        <p>Le deep learning me fascine par sa manière d’apprendre à partir de données pour résoudre des problèmes complexes.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Robotique</h3>
                        <p>La robotique me passionne pour son potentiel à combiner intelligence et mécanique afin de transformer notre quotidien.</p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Dev web</h3>
                        <p>De par mes études et mes projets personnels, j'ai pu développer des compétences dans le domaine du développement web.</p>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
    )   
};