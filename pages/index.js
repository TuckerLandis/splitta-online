import Head from "next/head";
import styles from "@/styles/Home.module.css";
import localFont from "@next/font/local";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const mainframeLight = localFont({
  src: "../assets/fonts/Mainframe-Light.woff2",
});
// const mainframeRegular = localFont({
//   src: "../assets/fonts/Mainframe-Regular.woff2",
// });
// const mainframeBold = localFont({
//   src: "../assets/fonts/Mainframe-Bold.woff2",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>splitta.online</title>
        <meta
          name="description"
          content="A place to experience buying things on a website, and some other cool stuff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <NavBar />

        <div className={`${styles.hero} ${mainframeLight.className}`}>
          <h3 className={styles.centered}>Hello! Welcome to the website</h3>
          <br></br>
          <p className={styles.centered}>
            Oh Lorem, Oh Ipsum, how art thou such strange words? Thou art but
            mere placeholder text, yet thou have a purpose so grand. In design
            and layout, thou art a tool of great might, filling the void with
            thy gibberish, making designs come to light.{" "}
          </p>

          <p className={styles.centered}>
            Forsooth, the words thou art composed of have no meaning, yet they
            serve a greater purpose. Thy jumbled letters and nonsensical phrases
            are the building blocks of visual art. Verily, without thee,
            designers would be lost, with empty spaces that would surely cause
            distress. So, here's to thee, Oh Lorem, Oh Ipsum, may thy legacy as
            the ruler of placeholder text forever endure.{" "}
          </p>
        </div>
      </main>
    </>
  );
}
