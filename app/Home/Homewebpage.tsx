import styles from "./Homewebpage.module.css";
import Topbar from "./Topbar";
import About from "./About";
import Silk from "./Silk";

export default function Homewebpage() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Topbar />
      </div>
      <div className={styles.body}>
        <Silk
          speed={5}
          scale={1}
          color="#748174ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className={styles.footer}>
        <About />
      </div>
    </div>
  );
}
