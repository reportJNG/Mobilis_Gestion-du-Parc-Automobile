import styles from "./LeftMenu.module.css";
import Image from "next/image";
import { useState } from "react";
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
            aria-label="clients"
            title="clients"
            type="button"
            onClick={() => ToggelPanel("clients")}
          >
            clients
          </button>
          <div className={styles.dropdown}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
            </ul>
          </div>
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Véhicules"
            title="Véhicules"
            type="button"
            onClick={() => ToggelPanel("Véhicules")}
          >
            Véhicules
          </button>
          <div className={styles.dropdown}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
            </ul>
          </div>
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Missions"
            title="Missions"
            type="button"
            onClick={() => ToggelPanel("Missions")}
          >
            Missions
          </button>
          <div className={styles.dropdown}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
            </ul>
          </div>
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Gestion_du_parc"
            title="Gestion_du_parc"
            type="button"
            onClick={() => ToggelPanel("Gestion_du_parc")}
          >
            Gestion du parc
          </button>
          <div className={styles.dropdown}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
            </ul>
          </div>
        </div>
        <div className={styles.boxeach}>
          <button
            aria-label="Administration"
            title="Administration"
            type="button"
            onClick={() => ToggelPanel("Administration")}
          >
            Administration
          </button>
          <div className={styles.dropdown}>
            <ul className={styles.ul}>
              <li className={styles.li}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
