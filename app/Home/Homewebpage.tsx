import styles from './Homewebpage.module.css';
import Topbar from './Topbar';
import { useState } from 'react';
export default function Homewebpage(){
    const[home,setHome]=useState<boolean>(true);
    const[profile,setProfile]=useState<boolean>(false);
    const[feedback,setFeedback]=useState<boolean>(false);
    const[settings,setSettings]=useState<boolean>(false);
    return(
        <div className={styles.container}>
                <div className={styles.up}>
                <Topbar setFeedback={setFeedback} setHome={setHome} setProfile={setProfile} setSettings={setSettings}/>
                </div>
        </div>
    )
}