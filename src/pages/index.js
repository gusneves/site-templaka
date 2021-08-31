import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import Header from "../components/Header";
import Footer from "../components/Footer";

import logo from "../../public/logo.png";
import cnc from "../../public/cnc.jpg";
import sin from "../../public/sin.jpg";
import tum from "../../public/tum.jpg";
import grav from "../../public/grav.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
	const router = useRouter();

	const handleClick = (n) => {
		router.push({
			pathname: "/servicos",
			query: {s:n},
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
						src={logo}
						width={450}
						height={72}
						layout={"intrinsic"}
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
								src={grav}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
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
								src={sin}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
							/>
							<p className={styles.category}>SINALIZAÇÃO</p>
						</div>

						<div
							className={styles.services}
							onClick={() => handleClick(2)}
						>
							<Image
								src={tum}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
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
								src={cnc}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
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
								src={grav}
								layout={"fill"}
								objectFit={"cover"}
								className={styles.image}
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
