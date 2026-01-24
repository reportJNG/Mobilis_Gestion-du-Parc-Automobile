import styles from "./FullpagePanel.module.css";
import { useState } from "react";
import Topbar from "./Topbar";
import LeftMenu from "./LeftMenu";
import About from "../Home/About";

export type ViewTopBar = "home" | "feedback" | "profile";

export default function FullpagePanel() {
  const [lefttoggle, setLeftToggle] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ViewTopBar>("home");
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [adminbridge, setAdminbridge] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Topbar
          setActiveView={setActiveView}
          setSettingsOpen={setSettingsOpen}
          lefttoggle={lefttoggle}
          setLeftToggle={setLeftToggle}
        />
        <div className={styles.fixedpostion}>
          {lefttoggle && (
            <LeftMenu
              close={() => setLeftToggle(false)}
              adminbridge={adminbridge}
            />
          )}
        </div>
      </div>
      <div className={styles.body}>
        <h1>dwqdwq</h1>
      </div>
      <div className={styles.footer}>
        <About />
      </div>
    </div>
  );
}
