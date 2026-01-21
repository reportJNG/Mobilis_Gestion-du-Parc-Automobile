import styles from "./About.module.css";
import { useRouter } from "next/navigation";
import { ViewTopBar } from "../Home/Homewebpage";
interface Aboutprops {
  setActiveView: React.Dispatch<React.SetStateAction<ViewTopBar>>;
}
export default function About({ setActiveView }: Aboutprops) {
  const toggle = (val: "feedback" | "home" | "profile") => {
    setActiveView(val);
  };
  const routes = useRouter(); //signout
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <div className={styles.spans}>
          <span
            className={styles.home}
            onClick={() => toggle("home")}
            aria-label="Accueil"
            title="Accueil"
          >
            Accueil
          </span>

          <span
            className={styles.profile}
            onClick={() => toggle("profile")}
            aria-label="Profil"
            title="Profil"
          >
            Profil
          </span>

          <span
            className={styles.feedback}
            onClick={() => toggle("feedback")}
            aria-label="Signaler"
            title="Signaler"
          >
            Rapport
          </span>

          <span
            className={styles.quitbtndoor}
            onClick={() => routes.push("/")}
            aria-label="Déconnexion"
            title="Déconnexion"
          >
            Déconnexion
          </span>
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
              window.open(
                "https://www.facebook.com/MobilisOfficielle",
                "_blank",
              )
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
      </div>
      <div className={styles.down}>
        <h2
          className={styles.text}
          onClick={() => {
            window.open("https://mobilis.dz/", "_banlk");
          }}
        >
          @ Officiel Site
        </h2>
      </div>
    </div>
  );
}
