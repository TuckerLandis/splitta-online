import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Card(props) {
    return (
        <>
            <div className="container">
                <div className={styles.card}>
                    <a href="#" className={styles.cardLink}>

                        {/* <!-- Icon --> */}
                        <div className={styles.cardIcon}>

                        </div>

                        {/* <!-- Media --> */}
                        <div className={styles.cardMedia}>
                            <div className={styles.imgContainer}>
                                <Image src="/plot01.png"
                                // layout=
                                    // width={640}
                                    // height={360}
                                   fill
                                   className={styles.image}
                                //    sizes="(max-width: 768px) 40vw,
                                //            (max-width: 1200px) 40vw,
                                //            33vw"
                                ></Image>

                            </div>
                        </div>

                        {/* <!-- Header --> */}
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardHeaderTitle}>Defect 01</h3>
                            <p className={styles.cardHeaderMeta}>$35</p>
                            <div className={styles.cardHeaderIcon}>

                            </div>
                        </div>

                    </a>
                </div>
            </div>
        </>
    )
}