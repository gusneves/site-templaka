import React, { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
	const [drawer, setDrawer] = useState(false);
	const Menu = () => setDrawer(!drawer);

	return (
		<sidebar>
			<IoMenu className={styles.bgMenuIcon} onClick={Menu} />
			<div className={drawer ? styles.shadow : ""} onClick={Menu}></div>
			{drawer ? (
				<div className={styles.bgMenuOverlay}>
					<IoClose className={styles.closeMenu} onClick={Menu} />
					<Link href="/">
						<a className={styles.bgItem}>Ínicio</a>
					</Link>
					<div className={styles.line}></div>
					<Link href="/servicos">
						<a className={styles.bgItem}>Serviços</a>
					</Link>
					<div className={styles.line}></div>
					<Link href="/contato">
						<a className={styles.bgItem}>Contato</a>
					</Link>
					<div className={styles.line}></div>
				</div>
			) : (
				<div></div>
			)}
		</sidebar>
	);
}
