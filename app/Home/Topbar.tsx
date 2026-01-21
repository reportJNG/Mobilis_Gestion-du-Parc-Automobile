import styles from "./Topbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Topbar() {
  const routes = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={"/home.jpg"}
          alt="Mobilis-logo"
          width={0}
          height={0}
          className={styles.logoimage}
        />
      </div>
      <div className={styles.mid}>
        <h1 className={styles.title}>Mobilis</h1>
      </div>
      <div className={styles.right}>
        <span
          aria-label="Login"
          title="Login"
          onClick={() => routes.push("/Login")}
          className={styles.loginButton}
        >
          Login
        </span>
      </div>
    </div>
  );
}
