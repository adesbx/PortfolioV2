import React from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Enchanté, je suis Arthur</h1>
            <p className={styles.description}>
                Je suis un étudiant en Master Informatique.
                Contactez-moi pour en savoir plus.
            </p>
            <a className={styles.contactBtn} href="mailto:arthurdbx93@gmail.com">Contactez-moi</a>
        </div>
        <img className={styles.heroImg} src={ getImageURL("hero/pufferFish.jpg")} alt="Une photo de moi" />
    </section>
};