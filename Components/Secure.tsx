import styles from "./Secure.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import About from "@/app/Home/About";
import Silk from "@/app/Home/Silk";

interface Secureprops {
  name: string;
  testerpsw: string;
  setRongPsw: React.Dispatch<React.SetStateAction<boolean>>;
  setGoodPsw: React.Dispatch<React.SetStateAction<boolean>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  where: string;
}

export default function Secure({
  name,
  testerpsw,
  setRongPsw,
  setGoodPsw,
  setDone,
  where,
}: Secureprops) {
  const [Loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const routes = useRouter();

  const action = () => {
    if (testerpsw === password) {
      setGoodPsw(true);
      setLoading(true);
      setTimeout(() => {
        setGoodPsw(false);
        setTimeout(() => {
          setDone(true);
          setLoading(false);
          routes.push(where);
        }, 1000);
      }, 7000);
    } else {
      setRongPsw(true);
      setTimeout(() => {
        setRongPsw(false);
      }, 7000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.silkBackground}>
        <Silk
          speed={3}
          scale={1.5}
          color="rgba(26, 58, 31, 0.15)"
          noiseIntensity={0.3}
          rotation={15}
        />
        <div className={styles.silkOverlay}></div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button
            className={styles.backButton}
            onClick={() => routes.push("/Login")}
            aria-label="Retour"
            title="Retour"
          >
            <i className="fi fi-rr-arrow-left"></i>
            <span>Retour</span>
          </button>

          <div className={styles.logo}>
            <h1 className={styles.logoText}>Mobilis</h1>
          </div>

          <div className={styles.userProfile}>
            <div className={styles.profileBadge}>
              <i className="fi fi-rr-user"></i>
              <span className={styles.userName}>{name}</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>
                <i className="fi fi-rr-lock"></i>
              </div>
              <h2 className={styles.heroTitle}>
                Sécurité <span className={styles.heroHighlight}>Avancée</span>
              </h2>
              <p className={styles.heroSubtitle}>
                Protection maximale de vos informations sensibles
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <i className="fi fi-rr-check-circle"></i>
                  <span>Chiffrement de bout en bout</span>
                </div>
                <div className={styles.featureItem}>
                  <i className="fi fi-rr-check-circle"></i>
                  <span>Authentification à deux facteurs</span>
                </div>
                <div className={styles.featureItem}>
                  <i className="fi fi-rr-check-circle"></i>
                  <span>Surveillance en temps réel</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.securityPanel}>
            <div className={styles.panelGlass}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>Accès Sécurisé</h3>
                <p className={styles.panelDescription}>
                  Entrez votre mot de passe unique pour accéder à la plateforme
                </p>
              </div>

              <div className={styles.panelBody}>
                <div className={styles.inputGroup}>
                  <label htmlFor="securePassword" className={styles.inputLabel}>
                    Mot de passe
                  </label>
                  <div
                    className={`${styles.passwordWrapper} ${isFocused ? styles.focused : ""}`}
                  >
                    <i className="fi fi-rr-lock"></i>
                    <input
                      id="securePassword"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        const ps = e.target.value;
                        const newps = ps.replace(/[^a-zA-Z0-9]/g, "");
                        setPassword(newps);
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onKeyPress={handleKeyPress}
                      maxLength={8}
                      minLength={8}
                      className={styles.passwordInput}
                      aria-label="Mot de passe"
                      title="Mot de passe"
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                    <div className={styles.inputStatus}>
                      <span className={styles.charCount}>
                        {password.length}/8
                      </span>
                      {password.length === 8 && (
                        <i
                          className="fi fi-rr-check"
                          style={{ color: "#10b981" }}
                        ></i>
                      )}
                    </div>
                  </div>
                  <div className={styles.inputHint}>
                    <i className="fi fi-rr-info"></i>
                    <span>8 caractères alphanumériques requis</span>
                  </div>
                </div>

                <button
                  className={`${styles.submitButton} ${Loading ? styles.loading : ""}`}
                  onClick={action}
                  disabled={Loading || password.length !== 8}
                  aria-label="Démarrer le travail"
                  title="Démarrer le travail"
                >
                  {Loading ? (
                    <>
                      <div className={styles.spinner}></div>
                      <span>Vérification en cours...</span>
                    </>
                  ) : (
                    <>
                      <i className="fi fi-rr-play"></i>
                      <span>Démarrer la session</span>
                    </>
                  )}
                </button>

                <div className={styles.securityTips}>
                  <div className={styles.tipsHeader}>
                    <i className="fi fi-rr-shield-exclamation"></i>
                    <span>Conseils de sécurité</span>
                  </div>
                  <ul className={styles.tipsList}>
                    <li>Ne partagez jamais votre mot de passe</li>
                    <li>Fermez votre session après utilisation</li>
                    <li>Vérifiez toujours l&apos;URL du site</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`${styles.loadingContainer} ${Loading ? styles.active : ""}`}
            >
              <div className={styles.loadingBar}>
                <div className={styles.loadingProgress}></div>
              </div>
              <p className={styles.loadingText}>Authentification en cours...</p>
            </div>
          </div>
        </div>
      </main>

      <div className={styles.footer}>
        <About />
      </div>
    </div>
  );
}
