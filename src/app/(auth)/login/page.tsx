import styles from "./page.module.css";
import LoginForm from "./_components/loginFom/LoginForm";
import Image from "next/image";
import Link from "next/link";
import GoogleSignIn from "@/components/GoogleSignIn/GoogleSignIn";

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/little-logo.svg"
            alt="little beesinblue logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <GoogleSignIn />
        <LoginForm />
        <span>
          Not registered? <Link href={"/register"}>Create account</Link>
        </span>
      </div>
    </main>
  );
};
export default LoginPage;
