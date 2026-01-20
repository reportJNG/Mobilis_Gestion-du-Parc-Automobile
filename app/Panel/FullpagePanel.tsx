import styles from "./FullpagePanel.module.css";
import LeftMenu from "./LeftMenu";
import { useState } from "react";
export default function FullpagePanel() {
  const [lefttoggle, setLeftToggle] = useState<boolean>(false);
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
        {lefttoggle && <LeftMenu close={() => setLeftToggle(false)} />}
      </div>
    </div>
  );
}
