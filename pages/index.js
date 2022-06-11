import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {SiReact, SiGraphql, SiNodedotjs, SiNextdotjs, SiGithub, SiLinkedin, SiLeetcode} from 'react-icons/si'
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cory Sorel</title>
                <meta
                    name="description"
                    content="Cory Sorel's development portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.hero}>
              <div className={styles.intro}>
                <div className={styles.skills}>
                  <SiNodedotjs className={styles.icon}/>
                  <SiReact className={styles.icon}/>
                  <SiNextdotjs className={styles.icon} />
                  <SiGraphql className={styles.icon}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.brand}>
                        <h3>dev.JS()</h3>
                        <p>cory sorel</p>
                    </div>
                    <div className={styles.cta}>
                        <Link href="/projects">
                          See My Work
                        </Link>
                    </div>
                </div>
              </div>
              <div className={styles.socialBar}>
                <p>junior developer | full stack</p>
                <div className={styles.socials}>
                  <SiLeetcode className={styles.socialIcon}/>
                  <SiGithub className={styles.socialIcon}/>
                  <SiLinkedin className={styles.socialIcon}/>
                </div>
              </div>
            </div>

        </div>
    );
}
