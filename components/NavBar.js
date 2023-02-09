// import Pencil from './pencil.svg'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import localFont from '@next/font/local'

const mainframeLight = localFont({ src: '../assets/fonts/Mainframe-Light.woff2' })


export default function NavBar() {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.navItem}>

                    <Image
                        src="/musicnoteBit.svg"
                        alt="PenPlotter"
                        // className={styles.vercelLogo}
                        width={20}
                        height={20}
                    // priority
                    />
                    <p className={`${mainframeLight.className} ${styles.navItemText}`}>audio</p>
                </div>
                

                <div className={styles.navItem}>
                    <Image
                        src="/pencilBit.svg"
                        alt="PenPlotter"
                        // className={styles.vercelLogo}
                        width={20}
                        height={20}
                        priority
                    />
                    <p className={`${mainframeLight.className} ${styles.navItemText}`}>plots</p>
                </div>

                <div className={styles.navItem}>

                    <Image
                        src="/monitorBit.svg"
                        alt="PenPlotter"
                        // className={styles.vercelLogo}
                        width={20}
                        height={20}
                    // priority
                    />
                    <p className={`${mainframeLight.className} ${styles.navItemText}`}>video</p>
                </div>



                {/* <div className={styles.navItem}>

                    <Image
                        src="/lightbulbBit.svg"
                        alt="PenPlotter"
                        // className={styles.vercelLogo}
                        width={20}
                        height={20}
                    // priority
                    />
                    <p className={styles.navItemText}>col</p>
                </div> */}


            </div>
            <div className="animated-line"></div>

        </>
    )
}