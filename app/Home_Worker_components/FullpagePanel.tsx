import styles from "./FullpagePanel.module.css";
import { useState } from "react";
import Topbar from "./Topbar";
import LeftMenu from "./LeftMenu";
import About from "../Home/About";
import Welcome from "./Welcome";
import ImagerHolder from "../Login/Help/ImagerHolder";
import TermservisesWorker from "./TermservisesWorker";
import DarkVeil from "./DarkVeil";

export type ViewTopBar = "home" | "feedback" | "profile";

export default function FullpagePanel() {
  const [lefttoggle, setLeftToggle] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ViewTopBar>("home");
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [adminbridge, setAdminbridge] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.fullBackground}>
        <DarkVeil
          hueShift={150}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

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

      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <Welcome />
          <div className={styles.underwelcome}>
            <div className={styles.right}>
              <TermservisesWorker />
            </div>
            <div className={styles.left}>
              <ImagerHolder
                link="/Workerland.jpg"
                Title="Soutenir nos équipes pour travailler mieux et ensemble"
              />
              <ImagerHolder
                link="/Workerland2.jpg"
                Title="Favoriser la collaboration et l'excellence en équipe"
              />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <About />
        </div>
      </div>
    </div>
  );
}
