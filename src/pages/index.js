import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
	const router = useRouter();

	const myLoader = ({ src }) => {
		return `https://templaka.com.br/data/${src}`;
	};

	const handleClick = (n) => {
		router.push({
			pathname: "/servicos",
			query: { s: n },
		});
	};

	return (
		<div className={styles.container} id="container">
			<Head>
				<title>Templaka</title>
				<meta
					name="description"
					content="Templaka Sinalização Eireli ME"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main} id="main">
				<section className={styles.banner} id="section">
					<Image
						loader={myLoader}
						src={"logo.png"}
						width={450}
						height={72}
						layout={"intrinsic"}
						alt="logomarca Templaka"
					/>
				</section>

				<section className={styles.showRoom}>
					<div className={styles.title}>
						<div className={styles.text}>
							<p>CONHEÇA</p>
							<p className={styles.bold}>NOSSOS SERVIÇOS</p>
						</div>
						<div className={styles.line}></div>
					</div>

					<div className={styles.flexContainer}>
						<div
							className={styles.services}
							onClick={() => handleClick(1)}
						>
							<Image
								loader={myLoader}
								src={"grav.jpg"}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
								alt="Gravações em baixo relevo"
							/>
							<p className={styles.category}>
								GRAVAÇÕES EM BAIXO RELEVO
							</p>
						</div>

						<div
							className={styles.services}
							onClick={() => handleClick(5)}
						>
							<Image
								loader={myLoader}
								src={"sin.jpg"}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
								alt="Sinalização"
							/>
							<p className={styles.category}>SINALIZAÇÃO</p>
						</div>

						<div
							className={styles.services}
							onClick={() => handleClick(2)}
						>
							<Image
								loader={myLoader}
								src={"tum.jpg"}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
								alt="Placas para túmulos"
							/>
							<p className={styles.category}>
								PLACAS PARA TÚMULOS
							</p>
						</div>

						<div
							className={styles.services}
							onClick={() => handleClick(4)}
						>
							<Image
								loader={myLoader}
								src={"cnc.jpg"}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
								alt="Recortes em router CNC"
							/>
							<p className={styles.category}>
								RECORTES EM ROUTER CNC
							</p>
						</div>

						<div
							className={styles.services}
							onClick={() => handleClick(3)}
						>
							<Image
								loader={myLoader}
								src={"hom.jpg"}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
								alt="Homenagens"
							/>
							<p className={styles.category}>HOMENAGENS</p>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
