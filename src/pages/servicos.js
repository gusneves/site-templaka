import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Servicos.module.css";

export default function Servicos() {
	const { query } = useRouter();
	const [categories, setCategories] = useState([]);
	const [paths, setPaths] = useState([]);
	const [selected, setSelected] = useState(
		query.s == undefined ? "1" : query.s.toString()
	);
	const [isOpen, setOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState();
	const [loaded, setLoaded] = useState(false);

	const myLoader = ({ src }) => {
		return `https://templaka.com.br/data/${src}`;
	};

	async function getCategories() {
		await axios
			.get("https://templaka.com.br/api/categories.php")
			.then((response) => {
				console.log(response.data);
				setCategories(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	async function getPaths(id = 1) {
		await axios
			.get(`https://templaka.com.br/api/paths.php?id=${id}`)
			.then((response) => {
				console.log(response.data);
				setPaths(response.data);
				setLoaded(true);
			})
			.catch((e) => {
				console.log(e);
			});
	}
	function handleChange(id) {
		if (id != selected) {
			setLoaded(false);
			setSelected(id);
		}
	}

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		getPaths(selected);
	}, [selected]);

	useEffect(() => {
		if (query.s != undefined) {
			const { s } = query;
			handleChange(s.toString());
		}
	}, [query]);

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
				<div className={styles.titleHolder}>
					<p className={styles.title}>NOSSOS SERVIÇOS</p>
				</div>
				<div className={styles.catWrapper}>
					{categories.map((value, index) => (
						<div
							key={index}
							className={
								value.Id === selected
									? styles.categorySelected
									: styles.category
							}
							onClick={() => {
								handleChange(value.Id);
							}}
						>
							<p key={value.Id}> {value.Category} </p>
						</div>
					))}
				</div>

				<div className={styles.imgWrapper}>
					{loaded ? (
						paths.map((value, index) => {
							return (
								<div key={index} className={styles.img}>
									<Image
										loader={myLoader}
										key={index}
										src={value.Path}
										layout={"fill"}
										objectFit={"cover"}
										alt={value.Id.toString()}
										onClick={() => {
											setPhotoIndex(index);
											setOpen(true);
										}}
										className={styles.imgconf}
									/>
								</div>
							);
						})
					) : (
						<p className={styles.loading}>Carregando...</p>
					)}
				</div>
				{isOpen && (
					<Lightbox
						mainSrc={
							"https://templaka.com.br/data/" +
							paths[photoIndex].Path
						}
						nextSrc={
							"https://templaka.com.br/data/" +
							paths[(photoIndex + 1) % paths.length].Path
						}
						prevSrc={
							"https://templaka.com.br/data/" +
							paths[
								(photoIndex + paths.length - 1) % paths.length
							].Path
						}
						onCloseRequest={() => setOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex(
								(photoIndex + paths.length - 1) % paths.length
							)
						}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % paths.length)
						}
					/>
				)}
			</main>

			<Footer />
		</div>
	);
}
