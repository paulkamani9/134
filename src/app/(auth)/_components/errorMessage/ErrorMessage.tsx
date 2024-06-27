import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string | undefined;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  return <span className={styles.errorMessage}>{message}</span>;
};
export default ErrorMessage;
