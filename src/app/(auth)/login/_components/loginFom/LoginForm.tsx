import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form action="" className={styles.form}>
      <span>or</span>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
