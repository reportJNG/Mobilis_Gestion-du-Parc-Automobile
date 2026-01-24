import Textchange from "@/Components/Textchange";
import styles from "./Welcome.module.css";

interface WelcomeProps {
  className?: string;
}

export default function Welcome({ className = "" }: WelcomeProps) {
  const messages: string[] = [
    "Bienvenue dans votre espace de travail Mobilis",
    "Chaque idée compte chez Mobilis",
    "Ici, vos idées font avancer l'Algérie",
    "Ensemble, innovons pour connecter le futur",
    "Votre créativité a sa place chez Mobilis",
    "Construisons des solutions, pas seulement des réseaux",
    "Mobilis, un espace où les idées prennent vie",
    "Avançons ensemble vers de nouveaux horizons",
    "L'innovation commence avec vous",
    "Travaillons aujourd'hui pour le Mobilis de demain",
  ];

  return (
    <section
      className={`${styles.container} ${className}`}
      aria-labelledby="welcome-heading"
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <div className={styles.textAnimationContainer}>
            <Textchange t={messages} />
          </div>

          <div className={styles.comment}>
            <p className={styles.commentText}>
              Un espace collaboratif où chaque idée contribue à lévolution de
              Mobilis Algérie
            </p>
          </div>
        </div>

        <div className={styles.actionsSection}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.btn} ${styles.primaryBtn}`}
              aria-label="Découvrez comment travailler avec nous"
              title="Comment travailler avec nous"
              onClick={() => {}}
            >
              <span className={styles.btnText}>
                Comment travailler avec nous
              </span>
              <span className={styles.btnIcon}>→</span>
            </button>

            <button
              className={`${styles.btn} ${styles.secondaryBtn}`}
              onClick={() => window.open("https://mobilis.dz/", "_blank")}
              aria-label="Visitez notre site web Mobilis"
              title="Visitez notre site web"
            >
              <span className={styles.btnText}>Visitez-nous</span>
              <span className={styles.btnIcon}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
