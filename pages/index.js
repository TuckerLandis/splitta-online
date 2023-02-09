import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// pages/_app.js
import localFont from '@next/font/local'
import NavBar from '@/components/NavBar'

// Font files can be colocated inside of `pages`
const mainframeLight = localFont({ src: '../assets/fonts/Mainframe-Light.woff2' })
const mainframeRegular = localFont({ src: '../assets/fonts/Mainframe-Regular.woff2' })
const mainframeBold = localFont({ src: '../assets/fonts/Mainframe-Bold.woff2' })



export default function Home() {
  return (
    <>
      <Head>
        <title className={styles.titleTxt}>splitta.online</title>
        <meta name="description" content="A place to experience buying things on a website, and some other cool stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainframeBold.className}>
        <h1 className={styles.center}>
          splitta.online
        </h1>
        <NavBar />
        <div className={styles.hero}>
          <h3 className={styles.centered}>Hello! Welcome to the website</h3>
          <br></br>
          <p className={styles.centered}>This is definitely a website and such, i'll probably add some content sometime</p>


        </div>
      </main>
    </>
  )
}
