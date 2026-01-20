import About from "./About";
import styles from "./Homewebpage.module.css";
import Topbar from "./Topbar";
import { useState } from "react";
export type ViewTopBar = "home" | "feedback" | "profile";
export default function Homewebpage() {
  const [activeView, setActiveView] = useState<ViewTopBar>("home");
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <Topbar
          setActiveView={setActiveView}
          setSettingsOpen={setSettingsOpen}
        />
      </div>
      <div className={styles.body}></div>
      <div className={styles.about}>
        <About setActiveView={setActiveView} />
      </div>
    </div>
  );
}
