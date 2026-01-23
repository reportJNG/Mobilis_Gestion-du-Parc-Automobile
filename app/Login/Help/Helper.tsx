import Textchange from "@/Components/Textchange";
import styles from "./Helper.module.css";
import { useRouter } from "next/navigation";
import About from "@/app/Home/About";
import Termservices from "./Termservices";
import ImagerHolder from "./ImagerHolder";
import Contact from "./Contact";
import Beams from "./Beams";

export default function Helper() {
  const routes = useRouter();
  const t: string[] = [
    "Toujours à votre écoute",
    "Connecter l’Algérie au numérique",
    "Innovation et fiabilité pour vous",
    "معاً نحو المستقبل الرقمي",
    "شبكة موثوقة لدعمكم",
    "خدمات مبتكرة تحمي بياناتكم",
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <button
            className={styles.navButton}
            onClick={() => routes.push("/Login")}
            aria-label="Retour à l'accueil"
            title="Retour"
          >
            <i className="fi fi-rr-arrow-left"></i>
            <span>Se connecter</span>
          </button>

          <div className={styles.brand}>
            <h1 className={styles.brandName}>
              <span className={styles.brandAccent}>M</span>obilis
            </h1>
            <span className={styles.brandTag}>Helper Center</span>
          </div>

          <div className={styles.navStatus} onClick={() => routes.push("/")}>
            <i className="fi fi-rr-home"></i>
            <span>Accueil</span>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.beamsContainer}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={2}
            scale={0.5}
            rotation={30}
          />
        </div>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <div className={styles.textRotator}>
                <Textchange t={t} />
              </div>

              <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>
                  Premier opérateur de télécommunications en Algérie
                </h2>

                <div className={styles.heroActions}>
                  <button
                    className={`${styles.button} ${styles.buttonPrimary}`}
                  >
                    <i className="fi fi-rr-document"></i>
                    <span>Rapporter</span>
                  </button>
                  <button
                    className={`${styles.button} ${styles.buttonSecondary}`}
                  >
                    <i className="fi fi-rr-marker"></i>
                    <span>Visitez-nous</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.services}>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesColumn}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <i className="fi fi-rr-list-check"></i>
                  Services & Offres
                </h3>
              </div>
              <Termservices />
            </div>
            <div className={styles.featuresColumn}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>
                  <i className="fi fi-rr-star"></i>
                  Nos Avantages
                </h3>
              </div>

              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <ImagerHolder
                    Title="Connectivité mobile fiable"
                    link="/firsthelp.png"
                  />
                </div>
                <div className={styles.featureItem}>
                  <ImagerHolder
                    Title="Services numériques sécurisés"
                    link="/secondhelp.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
              <h3 className={styles.contactTitle}>
                <i className="fi fi-rr-comments"></i>
                Contact & Support
              </h3>
              <p className={styles.contactSubtitle}>
                Plusieurs canaux à votre disposition pour nous contacter
              </p>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactRow}>
                <Contact
                  ui={<i className="fi fi-rr-envelope"></i>}
                  comment="Contactez-nous facilement par email pour toute demande ou assistance"
                  text="Mobilis.dz@gmail.com"
                />
                <Contact
                  ui={<i className="fi fi-rr-phone-call"></i>}
                  comment="Appelez notre service client pour une aide rapide et directe"
                  text="0655 00 29 99-Fax : 023 92 12 80"
                />
              </div>

              <div className={styles.contactRow}>
                <Contact
                  ui={<i className="fi fi-rr-land-layer-location"></i>}
                  comment="Rendez-vous dans l'une de nos agences Mobilis à travers le pays"
                  text="Business district of Bab Ezzouar, Algiers"
                />
                <Contact
                  ui={<i className="fi fi-rr-user-headset"></i>}
                  comment="Discutez avec notre équipe pour un support instantané"
                  text="Depuis un numéro postpayé : 666"
                />
              </div>

              <div className={styles.contactRow}>
                <Contact
                  ui={<i className="fi fi-brands-facebook-messenger"></i>}
                  comment="Discutez avec nous sur Messenger"
                  text="@MobilisOfficial"
                />
                <Contact
                  ui={<i className="fi fi-rr-shield-check"></i>}
                  comment="Vos données sont protégées selon les normes de sécurité les plus strictes"
                  text="Sécurité Certifiée"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <About />
      </footer>
    </div>
  );
}
