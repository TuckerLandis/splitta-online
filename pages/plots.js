import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import localFont from '@next/font/local'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Header from '@/components/Header'
import Card from '@/components/Card'

// Font files can be colocated inside of `pages`
const mainframeLight = localFont({ src: '../assets/fonts/Mainframe-Light.woff2' })
const mainframeRegular = localFont({ src: '../assets/fonts/Mainframe-Regular.woff2' })
const mainframeBold = localFont({ src: '../assets/fonts/Mainframe-Bold.woff2' })




export default function Home() {

    return (
        <>
            <Head>
                <title>splitta.online</title>
                <meta name="description" content="A place to experience buying things on a website, and some other cool stuff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                <Header />

                <NavBar />



                <div className={`${styles.hero} ${mainframeLight.className}`}>
                    <h3 className={styles.centered}>One of one, generative pen plots</h3>
                    <br></br>
                  <Card />
                </div>
            </main>
            {/* </div> */}

        </>
    )
}
