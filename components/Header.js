import styles from "@/styles/Home.module.css";
import localFont from "@next/font/local";
import Link from "next/link";
const mainframeBold = localFont({
    src: "../assets/fonts/Mainframe-Bold.woff2",
  });

export default function Header() {

    return (
        <>
        <Link href="/">
            <h1 className={`${styles.center} ${mainframeBold.className}`}>
                splitta.online
            </h1>
            <div className={styles.animatedline}></div>
            </Link>
        </>
    )
}