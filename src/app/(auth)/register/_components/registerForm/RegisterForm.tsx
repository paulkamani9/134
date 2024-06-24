import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <form action="" className={styles.form}>
      <span>or</span>
      <input type="email" name="email" placeholder="Enter Email" />
      <input type="password" name="password" placeholder="Create Password" />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" />
      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
