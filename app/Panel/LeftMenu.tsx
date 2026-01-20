import styles from "./LeftMenu.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface LeftMenuprops {
  close: () => void;
}
export default function LeftMenu() {
  const [panels, setPanels] = useState({
    clients: false,
    Véhicules: false,
    Missions: false,
    Gestion_du_parc: false,
    Administration: false,
  });
  const routes = useRouter(); //signout
  const ToggelPanel = (panel: keyof typeof panels) => {
    setPanels(
      (prev) =>
        Object.fromEntries(
          Object.keys(prev).map((key) => [key, key === panel]),
        ) as typeof panels,
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.leftlogo}>
          <Image
            src={"/logo.png"}
            alt="mobilis-logo"
            className={styles.imagelogo}
            width={60}
            height={60}
          />
        </div>
        <div className={styles.rightclose} onClick={close}>
          <i className="fi fi-rr-circle-xmark"></i>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.boxeach}>
          <button
            aria-label="Chauffeurs"
            title="Chauffeurs"
            type="button"
            onClick={() => ToggelPanel("clients")}
          >
            <i className="fi fi-rr-users-alt"></i>{" "}
            <strong className={styles.text}>Chauffeurs</strong>
          </button>
          {panels.clients && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                <li className={styles.li}>Ajouter un chauffeur</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Véhicules"
            title="Véhicules"
            type="button"
            onClick={() => ToggelPanel("Véhicules")}
          >
            <i className="fi fi-rr-cars"></i>{" "}
            <strong className={styles.text}>Véhicules</strong>
          </button>
          {panels.Véhicules && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                <li className={styles.li}>Ajouter un véhicule</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Missions"
            title="Missions"
            type="button"
            onClick={() => ToggelPanel("Missions")}
          >
            <i className="fi fi-rr-task-checklist"></i>{" "}
            <strong className={styles.text}>Missions</strong>
          </button>
          {panels.Missions && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                <li className={styles.li}>Ajouter une mission</li>
                <li className={styles.li}>Ajouter un incident</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Gestion_du_parc"
            title="Gestion_du_parc"
            type="button"
            onClick={() => ToggelPanel("Gestion_du_parc")}
          >
            <i className="fi fi-rr-dolly-flatbed"></i>{" "}
            <strong className={styles.text}>Gestion du parc</strong>
          </button>
          {panels.Gestion_du_parc && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                <li className={styles.li}>Entretien</li>
                <li className={styles.li}>Suivi</li>
                <li className={styles.li}>Carburant</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Administration"
            title="Administration"
            type="button"
            onClick={() => ToggelPanel("Administration")}
          >
            <i className="fi fi-rr-user-gear"></i>{" "}
            <strong className={styles.text}>Administration</strong>
          </button>
          {panels.Administration && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                <li className={styles.li}>Wilaya</li>
                <li className={styles.li}>Ajouter un utilisateur</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.down}>
        <button className={styles.quit} onClick={() => routes.push("/")}>
          <i className="fi fi-rr-person-to-door"></i>{" "}
          <strong className={styles.text}>Déconnecter</strong>
        </button>
      </div>
    </div>
  );
}
