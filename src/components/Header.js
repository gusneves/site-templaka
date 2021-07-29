import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import Sidebar from "./Sidebar";
import styles from "../styles/Header.module.css";
import logo from "../../public/logo.png";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

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
              <Image src={logo} width={180} height={29} layout={"fixed"} />
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
