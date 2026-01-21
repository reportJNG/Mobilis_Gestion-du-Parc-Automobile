import styles from "./Homewebpage.module.css";
import Topbar from "./Topbar";
import About from "./About";

export default function Homewebpage() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Topbar />
      </div>
      <div className={styles.body}></div>
      <div className={styles.footer}>
        <About />
      </div>
    </div>
  );
}
