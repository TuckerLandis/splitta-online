// import Pencil from './pencil.svg'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

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
                    <p className={styles.navItemText}>music</p>
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
                    <p className={styles.navItemText}>plots</p>
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
                    <p className={styles.navItemText}>video</p>
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
        </>
    )
}