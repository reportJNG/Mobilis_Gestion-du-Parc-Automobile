import styles from "./HomeWorker.module.css";
import { useRouter } from "next/navigation";
export default function HomeWorker() {
  const routes = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>
          Bienvenue dans votre espace de travail Mobilis ! Ici, chaque membre de
          l’équipe compte et chaque effort construit notre réussite collective.
        </p>

        <p>
          Nous encourageons la collaboration et la créativité pour que vous
          puissiez donner le meilleur de vous-même chaque jour.
        </p>

        <p>
          La sécurité et la protection des données sont nos priorités. Vous
          pouvez travailler en toute confiance, sachant que vos informations et
          vos projets sont protégés.
        </p>

        <p>
          Votre satisfaction et votre bien-être au sein de l’équipe sont
          essentiels. Nous sommes là pour vous soutenir et vous offrir toutes
          les ressources nécessaires pour réussir.
        </p>

        <p>
          Ensemble, nous innovons, nous progressons et nous faisons avancer
          Mobilis pour un avenir meilleur et connecté.
        </p>

        <p>
          Merci de faire partie de notre équipe. Votre contribution est
          précieuse et nous sommes fiers de travailler avec vous !
        </p>
      </div>

      <button className={styles.visitus} onClick={() => routes.push("/")}>
        Se déconnecter
      </button>
    </div>
  );
}
