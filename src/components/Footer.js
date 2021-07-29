import React from "react";
import styles from "../styles/Footer.module.css";

import {
  IoLogoWhatsapp,
  IoCall,
  IoMail,
  IoLocationSharp,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos}>
        <div className={styles.serviços}>
          <p className={styles.title}>Serviços</p>
          <p className={styles.sub}>serviço</p>
          <p className={styles.sub}>serviço</p>
          <p className={styles.sub}>serviço</p>
        </div>
        <div className={styles.contatos}>
          <p className={styles.title}>Contatos</p>
          <p className={styles.sub}>
            {" "}
            <IoMail className={styles.icon} />
            atendimento@templaka.com.br
          </p>
          <p className={styles.sub}>
            <IoCall className={styles.icon} />
            (14) 3232-3232
          </p>
          <p className={styles.sub}>
            <IoLogoWhatsapp className={styles.icon} />
            (14) 99999-9999
          </p>
        </div>
        <div className={styles.address}>
          <p className={styles.title}>Endereço</p>
          <p className={styles.sub}>
            <IoLocationSharp className={styles.icon} />
            R. Raposo Tavares, 5-40 - Higienópolis, Bauru - SP, 17013-031
          </p>
        </div>
      </div>
    </footer>
  );
}
