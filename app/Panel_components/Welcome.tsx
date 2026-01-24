import Textchange from "@/Components/Textchange";
import styles from "./Welcome.module.css";

export default function Welcome() {
  const t: string[] = [
    "Bienvenue dans votre espace de travail Mobilis",
    "Chaque idée compte chez Mobilis",
    "Ici, vos idées font avancer l’Algérie",
    "Ensemble, innovons pour connecter le futur",
    "Votre créativité a sa place chez Mobilis",
    "Construisons des solutions, pas seulement des réseaux",
    "Mobilis, un espace où les idées prennent vie",
    "Avançons ensemble vers de nouveaux horizons",
    "L’innovation commence avec vous",
    "Travaillons aujourd’hui pour le Mobilis de demain",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.comp}>
          {/**ready component here */}
          <Textchange t={t} />
        </div>
        <div className={styles.comment}>
          <p>
            Un espace collaboratif où chaque idée contribue à l’évolution de
            Mobilis Algérie
          </p>
        </div>
      </div>
      <div className={styles.boxacctions}>
        <div className={styles.buttonholder}>
          <button
            className={styles.btn}
            aria-label="Comment travailler avec nous"
            title="Comment travailler avec nous"
          >
            Comment travailler avec nous
          </button>
          <button
            className={styles.btn}
            onClick={() => window.open("https://mobilis.dz/", "_blank")}
            aria-label="Visitez-nous"
            title="Visitez-nous"
          >
            Visitez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
