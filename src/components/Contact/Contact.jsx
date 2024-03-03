import React from "react";
import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>        
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>N'hésitez pas à me contacter</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("contact/iconMail.png")} alt="Mail"/>
                    <a href="mailto:arthurdbx93@gmail.com">arthurdbx93@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/iconLinkedin.png")} alt="Linkedin"/>
                    <a href="https://www.linkedin.com/in/arthurdesbiaux/">Arthur Desbiaux</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/iconGithub.png")} alt="Github"/>
                    <a href="https://github.com/adesbx">adesbx</a>
                </li>
            </ul>
        </footer>
    ) 
};