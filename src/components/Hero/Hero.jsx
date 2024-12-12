import React from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Enchanté, je suis Arthur</h1>
            <p className={styles.description}>
                Je suis un étudiant en Master Informatique spécialisation Intelligence Artificielle.
                Contactez-moi pour en savoir plus.
            </p>
            <a className={styles.contactBtn} href="mailto:arthurdbx93@gmail.com">Contactez-moi</a>
        </div>
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#148AD3" d="M41.8,-59.6C55,-48,67,-36.8,75.6,-21.8C84.3,-6.8,89.5,12,84.6,27.6C79.7,43.2,64.5,55.5,48.7,64C32.9,72.5,16.4,77.1,0.2,76.8C-16.1,76.6,-32.1,71.4,-47.4,62.8C-62.6,54.1,-77,41.9,-79.9,27.3C-82.8,12.7,-74.1,-4.3,-68.6,-22.7C-63.2,-41.1,-60.9,-61,-50,-73.2C-39.1,-85.5,-19.6,-90.2,-2.6,-86.6C14.3,-83,28.7,-71.1,41.8,-59.6Z" transform="translate(100 100)"></path>
            <img className={styles.heroImg} src={ getImageURL("hero/Hero.png")} alt="Une photo de moi" />
        </svg> */}
        <img className={styles.heroImg} src={ getImageURL("hero/Hero.png")} alt="Une photo de moi" />
    </section>
};