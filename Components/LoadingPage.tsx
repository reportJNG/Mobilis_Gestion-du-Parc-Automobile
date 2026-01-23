import styles from "./LoadingPage.module.css";
import Image from "next/image";
import Silk from "@/app/Home/Silk";

interface LoadingPageProps {
  name: string;
}

export default function LoadingPage({ name }: LoadingPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.silkContainer}>
        <Silk
          speed={5}
          scale={2}
          color="#1a3a1f"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      <div className={styles.header}>
        <Image
          src="/logo.png"
          alt="Mobilis"
          width={64}
          height={64}
          className={styles.logo}
          priority
        />
        <span className={styles.logoText}>Mobilis</span>
      </div>

      <div className={styles.content}>
        <div className={styles.welcomeBox}>
          <div className={styles.avatar}>
            <span>{name.charAt(0).toUpperCase()}</span>
          </div>

          <div className={styles.welcomeText}>
            <h1>Bienvenue, {name}</h1>
            <p>Préparation de votre espace de travail...</p>
          </div>

          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
              <div className={styles.spinnerInner}></div>
            </div>
            <span className={styles.spinnerText}>Chargement en cours</span>
          </div>

          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>© 2024 Mobilis • Votre espace personnel</span>
      </div>
    </div>
  );
}
