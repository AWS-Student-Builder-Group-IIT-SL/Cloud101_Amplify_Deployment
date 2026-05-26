import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to AWS Student Builder Group!</h1>
      <p className={styles.description}>
        at <code className={styles.code}> Informatics Institute of Technology</code>
      </p>
    </div>
  );
}
