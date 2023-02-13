// import Pencil from './pencil.svg'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import localFont from '@next/font/local'
import Link from 'next/link'

const mainframeLight = localFont({ src: '../assets/fonts/Mainframe-Light.woff2' })


export default function NavBar() {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.navItem}>
                {/* <Link href="/">Home</Link> */}
                    <Image
                        src="/musicnoteBit.svg"
                        alt="PenPlotter"
                        width={20}
                        height={20}

                    />
                    <p className={`${mainframeLight.className} ${styles.navItemText}`}>audio</p>
                </div>
                
                <Link href="/plots">

                <div className={styles.navItem}>
                        <Image
                        src="/pencilBit.svg"
                        alt="PenPlotter"
                        width={20}
                        height={20}
                        // priority
                    />
                    
                    <p href="/plots" className={`${mainframeLight.className} ${styles.navItemText}`}>plots</p>
                </div>
                </Link>

                <div className={styles.navItem}>

                    <Image
                        src="/monitorBit.svg"
                        alt="PenPlotter"
                        width={20}
                        height={20}
                    />
                    <p className={`${mainframeLight.className} ${styles.navItemText}`}>video</p>
                </div>

            </div>
            <div className="animated-line"></div>

        </>
    )
}