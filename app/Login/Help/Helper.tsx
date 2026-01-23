import Textchange from "@/Components/Textchange";
import styles from "./Helper.module.css";
import { useRouter } from "next/navigation";
import About from "@/app/Home/About";
export default function Helper() {
  const routes = useRouter();
  const t: string[] = [
    "Toujours plus proche de vous",
    "Connecter l'Algérie au futur",
    "معاً نصنع المستقبل",
    "شبكة تثق بها",
    "Together toward the future",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.lefttopc}>
          <button
            className={styles.backbtn}
            onClick={() => routes.push("/")}
            aria-label="Retour"
            title="Retour"
          >
            <i className="fi fi-rr-left"></i>
          </button>
        </div>
        <div className={styles.midtopc}>
          <h1 className={styles.topctxt}>
            <strong>Mobilis</strong>
          </h1>
        </div>
        <div className={styles.righttopc}>
          <span>Home</span>
        </div>
      </div>
      <div className={styles.bodycontent}>
        <div className={styles.bodyupper}>
          <div className={styles.textholder}>
            <Textchange t={t} />
          </div>
          <div className={styles.titlespagebodyupper}>
            <h2 className={styles.titlebody}>
              <strong>
                Premier opérateur de télécommunications en Algérie
              </strong>
            </h2>
            <div className={styles.buttonuperholder}>
              <button>Reporter</button>
              <button>Visit us</button>
            </div>
          </div>
        </div>
        <div className={styles.bodymid}></div>
        <div className={styles.bodylower}>
          <About />
        </div>
      </div>
    </div>
  );
}
