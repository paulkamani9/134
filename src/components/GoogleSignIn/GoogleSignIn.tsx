import styles from "./GoogleSignIn.module.css";

import Image from "next/image";
import Link from "next/link";

const GoogleSignIn = () => {
  return (
    <a href={"uueue.com"} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/google.svg"
            alt="google sign in"
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <span>Sign in with google</span>
      </div>
    </a>
  );
};
export default GoogleSignIn;
