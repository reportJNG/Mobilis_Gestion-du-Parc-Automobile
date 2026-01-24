import styles from "./FullpagePanel.module.css";
import LeftMenu from "./LeftMenu";
import { useState } from "react";

export type ViewTopBar = "home" | "feedback" | "profile";

export default function FullpagePanel() {
  const [lefttoggle, setLeftToggle] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ViewTopBar>("home");
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [adminbridge, setAdminbridge] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.leftmenu}>
        {!lefttoggle && (
          <div className={styles.leftbtn}>
            <button
              className={styles.togglebutton}
              onClick={() => setLeftToggle(true)}
            >
              <i className="fi fi-rr-menu-burger"></i>
            </button>
          </div>
        )}
        {lefttoggle && (
          <LeftMenu
            close={() => setLeftToggle(false)}
            adminbridge={adminbridge}
          />
        )}
      </div>
    </div>
  );
}
