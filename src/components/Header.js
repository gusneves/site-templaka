import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import Sidebar from "./Sidebar";
import styles from "../styles/Header.module.css";
import logo from "../../public/logo.png";

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

export default function Header() {
	const { width } = useWindowSize();
	return (
		<Headroom>
			<div className={styles.container}>
				<nav className={styles.logo}>
					<Link href="/">
						<a>
							<Image
								src={logo}
								width={180}
								height={29}
								layout={"fixed"}
								alt="logomarca Templaka"
							/>
						</a>
					</Link>
				</nav>
				{width < 700 ? (
					<Sidebar />
				) : (
					<nav className={styles.nav}>
						<Link href="/">
							<a className={styles.navlink}>Ínicio</a>
						</Link>
						<Link href="/servicos">
							<a className={styles.navlink}>Serviços</a>
						</Link>
						<Link href="/contato">
							<a className={styles.navlink}>Contato</a>
						</Link>
					</nav>
				)}
			</div>
		</Headroom>
	);
}
