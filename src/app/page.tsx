import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.logo}
            src="/assets/main logo.svg"
            alt="main logo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.heading}>Welcome to beesinblue</span>
          <span className={styles.intro}>
            All we care about is that you get all the information you need to
            plan your groceries shopping
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.learnMoreButton}>Learn More</button>
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </div>
    </main>
  );
}
