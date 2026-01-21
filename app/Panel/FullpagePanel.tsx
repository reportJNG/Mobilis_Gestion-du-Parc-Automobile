import styles from "./FullpagePanel.module.css";
import LeftMenu from "./LeftMenu";
import { useState } from "react";
interface FullpagePanelprops {
  adminbridge: boolean;
}
export type ViewTopBar = "home" | "feedback" | "profile";

export default function FullpagePanel({ adminbridge }: FullpagePanelprops) {
  const [lefttoggle, setLeftToggle] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ViewTopBar>("home");
  const [settingsOpen, setSettingsOpen] = useState(false);
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
