import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { IMaskInput } from "react-imask";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contato.module.css";

export default function Contato() {
	const router = useRouter();

	const [estados, setEstados] = useState([]);
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");
	const [mensagem, setMensagem] = useState("");

	const handleNameChange = (e) => {
		setNome(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleTelChange = (value) => {
		setTelefone(value);
	};
	const handleCidadeChange = (e) => {
		setCidade(e.target.value);
	};
	const handleEstadoChange = (e) => {
		setEstado(e.target.value);
	};
	const handleCepChange = (value) => {
		setCep(value);
	};
	const handleMessageChange = (e) => {
		setMensagem(e.target.value);
	};

	async function getEstados() {
		await axios
			.get(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
			)
			.then((response) => {
				setEstados(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		getEstados();
	}, []);

	useEffect(() => {
		console.log(router.query);
		if (router.query.ok == 1) {
			alert("Mensagem enviada com sucesso!");
		}
		if (router.query.ok == 0) {
			alert(
				"Erro ao enviar mensagem, por favor, tente novamente mais tarde!"
			);
		}
	}, [router]);
	
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
				<div className={styles.color}></div>

				<div className={styles.formWrap}>
					<form
						action={
							"https://templaka.com.br/api/receive_message.php"
						}
						method={"post"}
						className={styles.form}
					>
						<label className={styles.label}>Nome</label>
						<input
							value={nome}
							name="nome"
							onChange={handleNameChange}
							type={"text"}
							required
							className={styles.input}
							placeholder="Insira seu nome"
						/>

						<label className={styles.label}>E-mail</label>
						<input
							value={email}
							name="email"
							onChange={handleEmailChange}
							type={"email"}
							required
							className={styles.input}
							placeholder="Insira seu e-mail"
						/>

						<label className={styles.label}>Telefone</label>
						<IMaskInput
							value={telefone}
							name="telefone"
							mask={"(00) 00000000[0]"}
							onAccept={(value) => {
								handleTelChange(value);
							}}
							required
							placeholder="Insira seu telefone"
							className={styles.input}
						/>

						<label className={styles.label}>Cidade</label>
						<input
							value={cidade}
							name="cidade"
							onChange={handleCidadeChange}
							type={"text"}
							required
							className={styles.input}
							placeholder="Insira sua cidade"
						/>

						<label className={styles.label}>Estado</label>

						<select
							value={estado}
							onChange={handleEstadoChange}
							name="estado"
							required
							className={(styles.input, styles.select)}
						>
							<option disabled defaultValue hidden value="">
								Selecione sua UF
							</option>

							{estados.map((value) => {
								return (
									<option key={value.id} value={value.sigla}>
										{value.nome}
									</option>
								);
							})}
						</select>
						<label className={styles.label}>CEP</label>
						<IMaskInput
							value={cep}
							name="cep"
							onAccept={(value) => {
								handleCepChange(value);
							}}
							type="text"
							mask={"00000-000"}
							required
							className={styles.input}
							placeholder="Insira seu CEP"
						/>

						<label className={styles.label}>Mensagem</label>
						<textarea
							name="mensagem"
							value={mensagem}
							onChange={handleMessageChange}
							required
							className={styles.textarea}
							placeholder="Insira aqui sua mensagem"
						></textarea>
						<input
							type="submit"
							value="Enviar"
							className={styles.button}
						/>
					</form>
				</div>
			</main>

			<Footer />
		</div>
	);
}
