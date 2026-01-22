import styles from "./About.module.css";
import { useRouter } from "next/navigation";
export default function About() {
  const routes = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.headerright}>
        <h2 className={styles.texth}>Together we make the future</h2>
      </div>
      <div className={styles.leftlinks}>
        <span onClick={() => routes.push("/Login")}>Login</span>
        <span
          onClick={() => window.open("https://mobilis.dz/entreprise", "_href")}
        >
          Business
        </span>
        <span
          onClick={() => window.open("https://mobilis.dz/contact", "_href")}
        >
          Contact
        </span>
        <span onClick={() => routes.push("/Login/Help")}>Report</span>
      </div>
      <div className={styles.socialacc}>
        {/**6 socials */}
        <span
          className={styles.instgram}
          onClick={() =>
            window.open("https://www.instagram.com/mobilis.dz/", "_blank")
          }
        >
          <i className="fi fi-brands-instagram"></i>
        </span>
        <span
          className={styles.facebook}
          onClick={() =>
            window.open("https://www.facebook.com/MobilisOfficielle", "_blank")
          }
        >
          <i className="fi fi-brands-facebook"></i>
        </span>
        <span
          className={styles.x}
          onClick={() => window.open("https://x.com/ATM_Mobilis", "_blank")}
        >
          <i className="fi fi-brands-twitter-alt"></i>
        </span>
        <span
          className={styles.youtube}
          onClick={() =>
            window.open("https://www.youtube.com/user/tvmobilis", "_blank")
          }
        >
          <i className="fi fi-brands-youtube"></i>
        </span>
        <span
          className={styles.linkin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/atmmobilis/?originalSubdomain=fr",
              "_blank",
            )
          }
        >
          <i className="fi fi-brands-linkedin"></i>
        </span>
        <span
          className={styles.tiktok}
          onClick={() =>
            window.open("https://www.tiktok.com/@mobilis.dz", "_blank")
          }
        >
          <i className="fi fi-brands-tik-tok"></i>
        </span>
      </div>
      <div className={styles.pp}>
        <span onClick={() => window.open("https://mobilis.dz/", "_href")}>
          All Rights Reserved | Mobilis 2027
        </span>
      </div>
    </div>
  );
}
