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
					<p className={styles.sub}>Gravações em baixo relevo</p>
					<p className={styles.sub}>Placas para túmulos</p>
					<p className={styles.sub}>Homengens</p>
					<p className={styles.sub}>Recortes em Router CNC</p>
					<p className={styles.sub}>Sinalização</p>
				</div>
				<div className={styles.contatos}>
					<p className={styles.title}>Contatos</p>
					<p className={styles.sub}>
						{" "}
						<IoMail className={styles.icon} />
						contato@templaka.com.br
					</p>
					<p className={styles.sub}>
						<IoCall className={styles.icon} />
						(14) 3012-0769
					</p>
					<p className={styles.sub}>
						<IoLogoWhatsapp className={styles.icon} />
						(14) 99817-7339 - SAC
					</p>
				</div>
				<div className={styles.address}>
					<p className={styles.title}>Endereço</p>
					<p className={styles.sub}>
						<IoLocationSharp className={styles.icon} />
						R. Raposo Tavares, 5-40 - V. Sto. Antonio, Bauru - SP,
						17013-031
					</p>
				</div>
			</div>
		</footer>
	);
}
