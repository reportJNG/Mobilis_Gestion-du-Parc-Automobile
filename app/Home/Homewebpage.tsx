// Homewebpage.tsx with Silk as full background
import styles from "./Homewebpage.module.css";
import Topbar from "./Topbar";
import About from "./About";
import Silk from "./Silk";
import Imagesbox from "./Imagesbox";
import Experince from "./Experince";
import Textchange from "@/Components/Textchange";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Homewebpage() {
  const t: string[] = [
    "Toujours plus proche de vous",
    "Connecter l'Algérie au futur",
    "معاً نصنع المستقبل",
    "شبكة تثق بها",
    "Together toward the future",
  ];
  const [calendar, setCalendar] = useState<number>(20);
  const [map, setMap] = useState<number>(55);
  const [users, setUsers] = useState<number>(15);
  const [lock, setLock] = useState<number>(34);
  const [cpu, setCpu] = useState<number>(61);
  const [headset, setHeadset] = useState<number>(10);
  const routes = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Topbar />
      </header>

      <div className={styles.silkContainer}>
        <Silk
          speed={5}
          scale={2}
          color="#1a3a1f"
          noiseIntensity={0}
          rotation={0}
        />

        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.textChangerContainer}>
                <Textchange t={t} />
              </div>
              <div className={styles.heroCTA}>
                <h2 className={styles.heroSubtitle}>
                  Premier opérateur de télécommunications en Algérie
                </h2>
                <div className={styles.ctaButtons}>
                  <button
                    className={`${styles.button} ${styles.primaryBtn}`}
                    onClick={() => routes.push("/Login")}
                  >
                    Connecter
                  </button>
                  <button
                    className={`${styles.button} ${styles.secondaryBtn}`}
                    onClick={() => routes.push("/Login/Help")}
                  >
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.features}>
            <div className={styles.featuresGrid}>
              <Imagesbox
                link={"/homebox1.jpg"}
                title={"Mobilis au cœur de la connexion"}
                comment={
                  "Nous accompagnons les Algériens chaque jour avec des solutions fiables innovantes et accessibles pour rester connectés partout et à tout moment"
                }
              />
              <Imagesbox
                link={"/homebox1.jpg"}
                title={"Construire l'avenir numérique"}
                comment="Mobilis s'engage à développer un réseau performant et sécurisé au service de la communication du progrès et de la confiance"
              />
            </div>
          </section>

          <section className={styles.statsSection}>
            <div className={styles.statsHeader}>
              <h2 className={styles.sectionTitle}>Mobilis en chiffres</h2>
              <p className={styles.sectionSubtitle}>
                Une croissance constante, une confiance renouvelée
              </p>
            </div>

            <div className={styles.statsGrid}>
              <Experince
                text="Plus de 20 ans d'expérience"
                comment="Mobilis accompagne les Algériens depuis plus de deux décennies dans les télécommunications."
                num={calendar}
                howmuch={20}
                icon={<i className="fi fi-rr-calendar-clock"></i>}
                setnum={setCalendar}
              />

              <Experince
                text="Couverture nationale"
                comment="Un réseau étendu couvrant l'ensemble du territoire algérien."
                num={map}
                howmuch={58}
                icon={<i className="fi fi-rr-marker"></i>}
                setnum={setMap}
              />

              <Experince
                text="Millions d'abonnés"
                comment="Une large base de clients qui fait confiance à Mobilis au quotidien."
                num={users}
                howmuch={45}
                icon={<i className="fi fi-rr-users"></i>}
                setnum={setUsers}
              />

              <Experince
                text="Infrastructure sécurisée"
                comment="Des systèmes fiables et conformes aux standards de sécurité modernes."
                num={lock}
                howmuch={99}
                icon={<i className="fi fi-rr-user-lock"></i>}
                setnum={setLock}
              />

              <Experince
                text="Innovation continue"
                comment="Déploiement constant de nouvelles technologies et services numériques."
                num={cpu}
                howmuch={100}
                icon={<i className="fi fi-rr-cpu"></i>}
                setnum={setCpu}
              />
              <Experince
                text="Support client 24/7"
                comment="Une assistance continue pour accompagner nos clients à tout moment."
                num={headset}
                howmuch={24}
                icon={<i className="fi fi-rr-user-headset"></i>}
                setnum={setHeadset}
              />
            </div>
          </section>
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaText}>
                <h3 className={styles.ctaTitle}>
                  Rejoignez la communauté Mobilis
                </h3>
                <p className={styles.ctaDescription}>
                  Accédez à votre espace personnel pour gérer vos services,
                  consulter vos factures et découvrir nos dernières offres
                </p>
              </div>
              <div className={styles.ctaAction}>
                <button
                  className={`${styles.button} ${styles.loginBtn}`}
                  onClick={() => routes.push("/Login")}
                >
                  <i className="fi fi-rr-user"></i>
                  <span>Espace Work</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className={styles.footer}>
        <About />
      </footer>
    </div>
  );
}
