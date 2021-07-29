import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import logo from "../../public/logo.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(async () => {
    await axios
      .get("http://templaka.com.br/api")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.container} id="container">
      <Head>
        <title>Templaka</title>
        <meta name="description" content="Templaka Sinalização Eireli ME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main} id="main">
        <section className={styles.banner} id="section">
          <Image src={logo} width={450} height={72} layout={"intrinsic"} />
        </section>

        <section className={styles.slider}>
          <div className={styles.title}>
            <div className={styles.text}>
              <p>CONHEÇA</p>
              <p className={styles.bold}>NOSSOS SERVIÇOS</p>
            </div>
            <div className={styles.line}></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
